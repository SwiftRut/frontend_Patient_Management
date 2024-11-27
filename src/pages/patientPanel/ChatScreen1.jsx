import { useEffect, useState, useRef } from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  InputAdornment,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  Send,
  AttachFile,
  Image,
  Description,
  Close,
} from "@mui/icons-material";
import { useDoctor } from "../../hooks/useDoctor";
import { usePatient } from "../../hooks/usePatient";
import { useGlobal } from "../../hooks/useGlobal";
import io from "socket.io-client";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";

const socket = io(import.meta.env.VITE_API_BASE_URL);

const ChatScreen1 = () => {
  const { user } = useAuth();
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [doctorContacts, setDoctorContacts] = useState([]);
  const { getChatHistory, getDoctorContacts, getAppointmetnsForPatient, allAppointments } = useGlobal();

  const messagesEndRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [previewFile, setPreviewFile] = useState(null);
  const [previewModal, setPreviewModal] = useState({
    open: false,
    content: null,
    type: null,
    fileName: null
  });

  // Fetch appointments on component mount
  useEffect(() => {
    getAppointmetnsForPatient(user.id);
  }, []);
  useEffect(() => {
    if (allAppointments?.length > 0) {
      const uniqueDoctors = Array.from(
        new Set(
          allAppointments
            ?.filter((apt) => apt?.doctorId) // Ensure doctorId exists
            .map((apt) => apt.doctorId._id)
        )
      ).map((doctorId) => {
        const appointment = allAppointments?.find(
          (apt) => apt?.doctorId && apt.doctorId._id === doctorId
        );

        // Ensure appointment and doctorId are defined
        if (appointment && appointment.doctorId) {
          return {
            _id: appointment.doctorId._id,
            name: appointment.doctorId.name,
            profile: appointment.doctorId.avatar,
            speciality: appointment.doctorId.speciality,
            lastAppointment: new Date(appointment.appointmentTime).toLocaleDateString(),
            email: appointment.doctorId?.email,
          };
        }
        return null; // Fallback if no valid data found
      });

      // Remove any null values from the array
      const filteredUniqueDoctors = uniqueDoctors.filter((doctor) => doctor !== null);
      setDoctorContacts(filteredUniqueDoctors);

      // Automatically select the first chat if available
      if (!selectedChat && filteredUniqueDoctors.length > 0) {
        setSelectedChat(filteredUniqueDoctors[0]);
      }
    }
  }, [allAppointments]);
  useEffect(() => {
    // Listen for incoming messages
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    });

    // Listen for connection events
    socket.on("connect", () => {
      console.log("Connected to socket server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from socket server");
    });

    // Cleanup on unmount
    return () => {
      socket.off("message");
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  const handleChatClick = async (doctor) => {
    setSelectedChat(doctor);
    try {
      const messageHistory = await getChatHistory(doctor._id, user.id);
      setMessages(messageHistory);
      socket.emit("joinRoom", { doctorId: doctor._id, patientId: user.id });
      toast.success("Chat started successfully.");
    } catch (error) {
      console.error("Failed to fetch chat history:", error);
      toast.error("Failed to fetch chat history.");
    }
  };

  // Function to convert file to base64
  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // Handle attachment menu
  const handleAttachClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle file selection
  const handleFileSelect = async (event, type) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error("File size must be less than 5MB");
      return;
    }

    // Validate file type
    const allowedTypes = {
      image: ['image/jpeg', 'image/png', 'image/gif'],
      file: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    };

    if (!allowedTypes[type].includes(file.type)) {
      toast.error(`Invalid ${type} format`);
      return;
    }

    try {
      // Convert file to base64
      const base64File = await fileToBase64(file);

      setPreviewFile({
        file,
        type,
        base64: base64File,
        preview: type === 'image' ? base64File : null
      });
    } catch (error) {
      console.error('File processing error:', error);
      toast.error('Failed to process file');
    }
  };

  // Update sendMessage function to handle files
  const sendMessage = async () => {
    if ((!messageInput.trim() && !previewFile) || !selectedChat) return;

    try {
      const messageData = {
        doctorId: selectedChat._id,
        patientId: user.id,
        senderId: user.id,
        receiverId: selectedChat._id,
        timestamp: new Date().toISOString(),
      };

      if (previewFile) {
        messageData.type = previewFile.type;
        messageData.fileUrl = previewFile.base64;
        messageData.fileName = previewFile.file.name;
        messageData.fileSize = `${(previewFile.file.size / (1024 * 1024)).toFixed(2)} MB`;
        messageData.messageContent = messageInput.trim();
      } else {
        messageData.type = 'text';
        messageData.messageContent = messageInput.trim();
      }

      socket.emit("message", messageData);
      setMessageInput("");
      setPreviewFile(null);

      // Scroll to bottom after sending
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error('Send message error:', error);
      toast.error('Failed to send message');
    }
  };

  // Preview component
  const FilePreview = () => {
    if (!previewFile) return null;

    return (
      <div className="relative p-2 bg-gray-50 rounded-lg mb-2">
        {previewFile.type === 'image' && (
          <img
            src={previewFile.preview}
            alt="Preview"
            className="max-h-32 rounded-lg"
          />
        )}
        {previewFile.type === 'file' && (
          <div className="flex items-center space-x-2">
            <Description className="text-gray-500" />
            <span className="text-sm">{previewFile.file.name}</span>
          </div>
        )}
        <IconButton
          className="absolute top-1 right-1"
          size="small"
          onClick={() => setPreviewFile(null)}
        >
          <Close />
        </IconButton>
      </div>
    );
  };

  // Add this function to handle preview clicks
  const handlePreviewClick = (content, type, fileName) => {
    setPreviewModal({
      open: true,
      content,
      type,
      fileName
    });
  };

  // Update the renderMessage function
  const renderMessage = (msg, index) => (
    <div
      key={index}
      className={`mb-2 ${msg?.senderId === user.id ? "text-right" : "text-left"}`}
    >
      <div className={`inline-block max-w-md ${msg?.senderId === user.id ? "bg-blue-100" : "bg-gray-100"
        } rounded-lg p-3 hover:shadow-lg transition-shadow duration-200`}>
        {msg.type === 'text' && (
          <p className="text-sm">{msg.messageContent}</p>
        )}

        {msg.type === 'image' && (
          <div className="relative group">
            <img
              src={msg.fileUrl}
              alt="Shared image"
              className="max-w-xs rounded-lg cursor-pointer hover:opacity-90"
              onClick={() => handlePreviewClick(msg.fileUrl, 'image', msg.fileName)}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity">
              {msg.messageContent && (
                <p className="text-sm mb-1">{msg.messageContent}</p>
              )}
              <p className="text-xs">{msg.fileName}</p>
              <p className="text-xs">{msg.fileSize}</p>
            </div>
          </div>
        )}

        {msg.type === 'file' && (
          <div className="flex flex-col space-y-2">
            <div
              className="flex items-center space-x-2 bg-white p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
              onClick={() => handlePreviewClick(msg.fileUrl, 'file', msg.fileName)}
            >
              <Description className="text-gray-500" />
              <div>
                <span className="text-blue-500 hover:underline">
                  {msg.fileName}
                </span>
                <p className="text-xs text-gray-500">{msg.fileSize}</p>
              </div>
            </div>
            {msg.messageContent && (
              <p className="text-sm">{msg.messageContent}</p>
            )}
          </div>
        )}

        <p className="text-xs text-gray-500 mt-1">
          {new Date(msg.timestamp).toLocaleTimeString()}
        </p>
      </div>
    </div>
  );

  // Add this preview modal component before the return statement
  const PreviewModal = () => (
    <Dialog
      open={previewModal.open}
      onClose={() => setPreviewModal({ open: false, content: null, type: null })}
      maxWidth="lg"
      fullWidth
    >
      <DialogTitle className="flex justify-between items-center">
        {previewModal.fileName}
        <IconButton onClick={() => setPreviewModal({ open: false, content: null, type: null })}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {previewModal.type === 'image' ? (
          <img
            src={previewModal.content}
            alt="Preview"
            className="w-full h-auto"
          />
        ) : (
          <iframe
            src={previewModal.content}
            title="Document Preview"
            width="100%"
            height="600px"
            className="border-0"
          />
        )}
      </DialogContent>
    </Dialog>
  );

  return (
    <div className="flex h-[calc(100vh-80px)] p-4 bg-gray-100">
      {/* Doctor List (Sidebar) */}
      <div className="w-1/3 bg-white shadow-lg rounded-lg p-4 overflow-auto">
        <div className="mb-4">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search Doctor"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <List>
          {doctorContacts?.map((doctor) => (
            <ListItem
              button
              key={doctor._id}
              onClick={() => handleChatClick(doctor)}
              selected={selectedChat?._id === doctor._id}
            >
              <ListItemAvatar>
                <Avatar src={doctor.profile} alt={doctor.name} />
              </ListItemAvatar>
              <ListItemText
                primary={doctor.name}
                secondary={`${doctor.speciality} • Last appointment: ${doctor.lastAppointment}`}
                primaryTypographyProps={{ fontWeight: "bold" }}
                secondaryTypographyProps={{ color: "textSecondary" }}
              />
            </ListItem>
          ))}
        </List>
      </div>

      {/* Chat Window */}
      <div className="flex-1 bg-white shadow-lg rounded-lg ml-4 p-4 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="flex items-center mb-4">
              <Avatar src={selectedChat.profile} alt={selectedChat.name} />
              <div className="ml-4">
                <h2 className="text-lg font-bold">{selectedChat.name}</h2>
                <p className="text-sm text-gray-500">{selectedChat.speciality}</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-auto mb-4">
              {messages.map((msg, index) => renderMessage(msg, index))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="mt-4">
              {/* File Preview */}
              <FilePreview />

              {/* Message Input */}
              <div className="flex border rounded justify-between items-center space-x-2 ">
                <div className="left">
                  <Tooltip title="Attach file">
                    <IconButton onClick={handleAttachClick}>
                      <AttachFile />
                    </IconButton>
                  </Tooltip>

                  <input
                    fullWidth
                    variant="outlined"
                    placeholder="Type a message..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                    multiline
                    maxRows={4}
                  />
                </div>

                <div className="right">
                  <IconButton onClick={sendMessage} color="primary">
                    <Send />
                  </IconButton>
                </div>
              </div>

              {/* File Selection Menu */}
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <MenuItem>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        handleFileSelect(e, 'image');
                        handleClose();
                      }}
                    />
                    <Image className="mr-2" /> Image
                  </label>
                </MenuItem>
                <MenuItem>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => {
                        handleFileSelect(e, 'file');
                        handleClose();
                      }}
                    />
                    <Description className="mr-2" /> Document
                  </label>
                </MenuItem>
              </Menu>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Select a doctor to start chatting</p>
          </div>
        )}
      </div>
      <PreviewModal />
    </div>
  );
};

export default ChatScreen1;
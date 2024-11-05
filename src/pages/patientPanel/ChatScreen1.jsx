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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Send } from "@mui/icons-material";
import { useDoctor } from "../../hooks/useDoctor";
import { usePatient } from "../../hooks/usePatient";
import { useGlobal } from "../../hooks/useGlobal";
import io from "socket.io-client";
import { useAuth } from "../../hooks/useAuth";

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

  // Fetch appointments on component mount
  useEffect(() => {
    getAppointmetnsForPatient(user.id);
  }, []);
  console.log(allAppointments)
  // Process appointments to get doctor contacts
  useEffect(() => {
    if (allAppointments?.length > 0) {
      // Create unique doctor contacts from appointments, filtering out null or undefined doctorId
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
  

  const handleChatClick = async (doctor) => {
    setSelectedChat(doctor);
    try {
      const messageHistory = await getChatHistory(doctor._id, user.id);
      setMessages(messageHistory);
      socket.emit("joinRoom", { doctorId: doctor._id, patientId: user.id });
    } catch (error) {
      console.error("Failed to fetch chat history:", error);
    }
  };

  const sendMessage = async () => {
    if (selectedChat && messageInput.trim()) {
      const messageData = {
        doctorId: selectedChat._id,
        patientId: user.id,
        messageContent: messageInput,
        senderId: user.id,
        receiverId: selectedChat._id,
        timestamp: new Date().toISOString(),
      };
      socket.emit("message", messageData);
      setMessageInput("");
    }
  };

  // Handle real-time messages
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Filter doctors based on search term
  const filteredDoctors = doctorContacts.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.speciality.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.email.toLowerCase().includes(searchTerm.toLowerCase())
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
          {filteredDoctors.map((doctor) => (
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
            <div className="flex items-center mb-4">
              <Avatar src={selectedChat.profile} alt={selectedChat.name} />
              <div className="ml-4">
                <h2 className="text-lg font-bold">{selectedChat.name}</h2>
                <p className="text-sm text-gray-500">{selectedChat.speciality}</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-auto mb-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${msg?.senderId === user.id ? "text-right" : "text-left"}`}
                >
                  <div className="inline-block">
                    <p className="bg-gray-200 rounded-lg p-2 max-w-xs inline-block text-sm">
                      {msg.messageContent}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(msg.timestamp).toLocaleTimeString()}
                    </p>
                  </div>

                  {msg?.type === "image" && (
                    <div className="my-2">
                      <img src={msg.imageUrl} alt="Chat Image" className="max-w-xs rounded-lg" />
                      <p className="text-xs text-gray-500">
                        {new Date(msg.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  )}
                  {msg?.type === "file" && (
                    <div className="my-2 inline-block bg-gray-100 p-2 rounded-lg">
                      <p className="text-blue-500">{msg.fileName}</p>
                      <p className="text-xs text-gray-500">{msg.fileSize}</p>
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input box */}
            <div className="mt-4">
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type a message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={sendMessage}>
                        <Send />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Select a doctor to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatScreen1;
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
import { initialChats } from "./profile/constants";
import { useDoctor } from "../../hooks/useDoctor";
import { usePatient } from "../../hooks/usePatient";
import { useGlobal } from "../../hooks/useGlobal";
import io from "socket.io-client";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";

const socket = io(import.meta.env.VITE_API_BASE_URL);

const ChatScreen = () => {
  const { user } = useAuth();
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [doctorId] = useState(user.id);
  const [patientContacts, setPatientContacts] = useState([]);
  const { getAllDoctors } = useDoctor();
  const { getAllPatients } = usePatient();
  const { getChatHistory, getPatientContacts, getAppointmetnsForDoctor, allAppointments } = useGlobal();
  
  // Ref for message container
  const msgContainerRef = useRef(null);

  // Filter and format patient contacts from appointments
  useEffect(() => {
    const fetchAppointments = async () => {
      await getAppointmetnsForDoctor(user.id);
    };
    fetchAppointments();
  }, []);

  useEffect(() => {
    if (allAppointments?.length > 0) {
      // Create unique patient contacts from appointments
      const uniquePatients = Array.from(new Set(allAppointments.map(apt => apt.patientId._id)))
        .map(patientId => {
          const appointment = allAppointments.find(apt => apt.patientId._id === patientId);
          return {
            _id: appointment.patientId._id,
            firstName: appointment.patientId.firstName,
            lastName: appointment.patientId.lastName,
            profile: appointment.patientId.avatar,
            lastAppointment: new Date(appointment.appointmentTime).toLocaleDateString(),
            email: appointment.patientId.email
          };
        });
      setPatientContacts(uniquePatients);
      if (!selectedChat && uniquePatients.length > 0) {
        setSelectedChat(uniquePatients[0]);
      }
    }
  }, [allAppointments]);

  const handleChatClick = async (chat) => {
    setSelectedChat(chat);
    try {
      const history = await getChatHistory(doctorId, chat._id);
      setMessages(history);
      socket.emit("joinRoom", { doctorId, patientId: chat._id });
      toast.success("Chat started successfully.");
    } catch (error) {
      console.error("Failed to fetch chat history:", error);
      toast.error("Failed to fetch chat history.");
    }
  };

  const scrollToBottom = () => {
    if (msgContainerRef.current) {
      msgContainerRef.current.scrollTop = msgContainerRef.current.scrollHeight;
    }
  };

  const sendMessage = async () => {
    if (doctorId && selectedChat && messageInput.trim()) {
      const messageData = {
        doctorId,
        patientId: selectedChat._id,
        messageContent: messageInput,
        senderId: doctorId,
        receiverId: selectedChat._id,
        timestamp: new Date().toISOString(),
      };
      socket.emit("message", messageData);
      setMessageInput("");
      scrollToBottom();
    }
  };

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
      scrollToBottom();
    });

    return () => {
      socket.off("message");
    };
  }, []);

  // Filter contacts based on search term
  const filteredContacts = patientContacts.filter(contact => 
    `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Auto scroll when messages array changes
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex h-[calc(100vh-80px)] p-4 bg-gray-100">
      {/* Patient List */}
      <div className="w-1/3 bg-white shadow-lg rounded-lg p-4 overflow-auto">
        <div className="mb-4">
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search Patient"
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
          {filteredContacts.map((contact) => (
            <ListItem
              button
              key={contact._id}
              onClick={() => handleChatClick(contact)}
              selected={selectedChat?._id === contact._id}
            >
              <ListItemAvatar>
                <Avatar src={contact.profile} alt={`${contact.firstName} ${contact.lastName}`} />
              </ListItemAvatar>
              <ListItemText
                primary={`${contact.firstName} ${contact.lastName}`}
                secondary={`Last appointment: ${contact.lastAppointment}`}
                primaryTypographyProps={{ fontWeight: "bold" }}
                secondaryTypographyProps={{ color: "textSecondary" }}
              />
            </ListItem>
          ))}
        </List>
      </div>

      {/* Chat window */}
      <div className="flex-1 bg-white shadow-lg rounded-lg ml-4 p-4 flex flex-col max-h-full">
        {selectedChat ? (
          <>
            <div className="flex items-center mb-4">
              <Avatar 
                src={selectedChat.profile} 
                alt={`${selectedChat.firstName} ${selectedChat.lastName}`} 
              />
              <div className="ml-4">
                <h2 className="text-lg font-bold">
                  {`${selectedChat.firstName} ${selectedChat.lastName}`}
                </h2>
                <p className="text-sm text-gray-500">{selectedChat.email}</p>
              </div>
            </div>

            <div ref={msgContainerRef} id="msg_container" className="flex-1 overflow-y-scroll mb-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    msg?.senderId === doctorId ? "text-right" : "text-left"
                  }`}
                >
                  <div className="inline-block">
                    <p className="bg-gray-200 rounded-lg p-2 max-w-xs inline-block text-sm">
                      {msg.messageContent}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(msg.timestamp).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

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
            <p className="text-gray-500">Select a patient to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatScreen;
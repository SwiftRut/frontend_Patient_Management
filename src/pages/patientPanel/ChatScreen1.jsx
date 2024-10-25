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
import { initialChats } from "./constant";
import io from "socket.io-client";
import { useAuth } from "../../hooks/useAuth";

const socket = io("http://localhost:8001");

const ChatScreen1 = () => {
  const { user } = useAuth();
  const [selectedChat, setSelectedChat] = useState(initialChats[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [doctorId, setDoctorId] = useState("670475d7639c7f96cadbd05c");
  const [patientId, setPatientId] = useState(user.id);
  const { getAllDoctors } = useDoctor();
  const { getAllPatients } = usePatient();
  const {getChatHistory ,getDoctorContacts, getAppointmetnsForPatient,allAppointments:allAppointements} = useGlobal();
  console.log(allAppointements,"<<<<<<<<<< from patietn")

  const messagesEndRef = useRef(null); 
  useEffect(() => {
    getAppointmetnsForPatient(user.id);
    console.log(allAppointements)
  },[]);
  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const filteredChats = initialChats.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      chat.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sendMessage = async () => {
    if (doctorId && patientId && messageInput.trim()) {
      const messageData = {
        doctorId,
        patientId,
        messageContent: messageInput,
        senderId: patientId,
        receiverId: doctorId,
        timestamp: new Date().toISOString(),
      };
      socket.emit("message", messageData);
      setMessageInput("");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedDoctorId = await getAllDoctors();
      const fetchedPatientId = await getAllPatients();
      setDoctorId(fetchedDoctorId);
      setPatientId(fetchedPatientId);

      if (fetchedDoctorId && fetchedPatientId) {
        socket.emit("joinRoom", { doctorId: fetchedDoctorId, patientId: fetchedPatientId });
        console.log("Joining room", fetchedDoctorId, fetchedPatientId);
      }

      const messageHistory = await getChatHistory(fetchedDoctorId, fetchedPatientId);
      setMessages(messageHistory);
      getDoctorContacts(patientId);
    };

    fetchData();

    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex h-[calc(100vh-80px)] p-4 bg-gray-100">
      {/* Chat List (Sidebar) */}
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
          {filteredChats.map((chat) => (
            <ListItem
              button
              key={chat.id}
              onClick={() => handleChatClick(chat)}
              selected={selectedChat.id === chat.id}
            >
              <ListItemAvatar>
                <Avatar src={chat.profile} alt={chat.name} />
              </ListItemAvatar>
              <ListItemText
                primary={chat.name}
                secondary={chat.message}
                primaryTypographyProps={{ fontWeight: "bold" }}
                secondaryTypographyProps={{ color: "textSecondary" }}
              />
              <span>{chat.time}</span>
            </ListItem>
          ))}
        </List>
      </div>

      {/* Chat Window */}
      <div className="flex-1 bg-white shadow-lg rounded-lg ml-4 p-4 flex flex-col">
        <div className="flex items-center mb-4">
          <Avatar src={selectedChat.profile} alt={selectedChat.name} />
          <div className="ml-4">
            <h2 className="text-lg font-bold">{selectedChat.name}</h2>
            <p className="text-sm text-gray-500">{selectedChat.time}</p>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-auto mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${msg?.receiverId !== "67042956a717e34ec74d0477" ? "text-right" : "text-left"}`}
            >
              <div className="inline-block">
                <p className="bg-gray-200 rounded-lg p-2 max-w-xs inline-block text-sm">
                  {msg.messageContent}
                </p>
                <p className="text-xs text-gray-500 mt-1">{new Date(msg.timestamp).toLocaleTimeString()}</p>
              </div>

              {msg?.type === "image" && (
                <div className="my-2">
                  <img src={msg.imageUrl} alt="Chat Image" className="max-w-xs rounded-lg" />
                  <p className="text-xs text-gray-500">{new Date(msg.timestamp).toLocaleTimeString()}</p>
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
          {/* This empty div ensures scrolling to the bottom */}
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
      </div>
    </div>
  );
};

export default ChatScreen1;

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

const socket = io("http://localhost:8001");

const ChatScreen = () => {
  const [selectedChat, setSelectedChat] = useState(initialChats[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [doctorId, setDoctorId] = useState("670475d7639c7f96cadbd05c");
  const [patientId, setPatientId] = useState("67042956a717e34ec74d0477");
  const [patientContacts, setPatientContacts] = useState([]);
  const [doctorContacts, setDoctorContacts] = useState([]);
  const { getAllDoctors } = useDoctor();
  const { getAllPatients } = usePatient();
  const { getChatHistory, getPatientContacts } = useGlobal();

  console.log(patientContacts, "patientId");
  console.log(doctorContacts, "doctorId");

  // Ref for message container
  const msgContainerRef = useRef(null);

  const handleChatClick = async (chat) => {
    setSelectedChat(chat);
    const { id: selectedPatientId } = chat;
    console.log(chat, doctorId, "------------------------------------");
    try {
      const history = await getChatHistory(doctorId, chat._id);
      setMessages(history);
      console.log("Thisis the history", history);
      socket.emit("joinRoom", { doctorId, patientId: selectedPatientId });
    } catch (error) {
      console.error("Failed to fetch chat history:", error);
    }
  };

  const scrollToBottom = () => {
    if (msgContainerRef.current) {
      msgContainerRef.current.scrollTop = msgContainerRef.current.scrollHeight;
    }
  };

  const sendMessage = async () => {
    if (doctorId && patientId && messageInput.trim()) {
      const messageData = {
        doctorId,
        patientId,
        messageContent: messageInput,
        senderId: doctorId,
        receiverId: patientId,
        timestamp: new Date().toISOString(),
      };
      socket.emit("message", messageData);
      setMessageInput("");
      scrollToBottom();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchedDoctorId = await getAllDoctors(); //return the single id for testing
      const fetchedPatientId = await getAllPatients(); //return the single id for testing
      setDoctorId(fetchedDoctorId);
      setPatientId(fetchedPatientId);

      if (fetchedDoctorId && fetchedPatientId) {
        socket.emit("joinRoom", { doctorId: fetchedDoctorId, patientId: fetchedPatientId });
        console.log("Joining room", fetchedDoctorId, fetchedPatientId);
      }

      const messageHistory = await getChatHistory(fetchedDoctorId, fetchedPatientId);
      setMessages(messageHistory);
      scrollToBottom();
      const patientContacts = await getPatientContacts(doctorId);
      setPatientContacts(patientContacts);
      const doctorContacts = await getPatientContacts(patientId);
      setDoctorContacts(doctorContacts);
    };

    fetchData();

    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
      scrollToBottom();
    });

    return () => {
      socket.off("message");
    };
  }, []);

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
          {patientContacts.map((chat) => (
            <ListItem
              button
              key={chat.id}
              onClick={() => handleChatClick(chat)}
              selected={selectedChat.id === chat.id}
            >
              <ListItemAvatar>
                <Avatar src={chat.profile} alt={chat.firstName + " " + chat.lastName} />
              </ListItemAvatar>
              <ListItemText
                primary={chat.firstName + " " + chat.lastName}
                secondary={chat.message}
                primaryTypographyProps={{ fontWeight: "bold" }}
                secondaryTypographyProps={{ color: "textSecondary" }}
              />
              <span>{chat.timestamp}</span>
            </ListItem>
          ))}
        </List>
      </div>

      {/* Chat window */}
      <div className="flex-1 bg-white shadow-lg rounded-lg ml-4 p-4 flex flex-col max-h-full">
        <div className="flex items-center mb-4">
          <Avatar src={selectedChat.profile} alt={selectedChat.name} />
          <div className="ml-4">
            <h2 className="text-lg font-bold">{selectedChat.name}</h2>
            <p className="text-sm text-gray-500">{selectedChat.time}</p>
          </div>
        </div>

        <div ref={msgContainerRef} id="msg_container" className="flex-1 overflow-y-scroll mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg?.receiverId === "67042956a717e34ec74d0477" ? "text-right" : "text-left"
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
      </div>
    </div>
  );
};

export default ChatScreen;

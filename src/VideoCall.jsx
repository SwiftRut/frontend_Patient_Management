import React, { useEffect, useRef, useState } from "react";
import { Button, TextField } from "@mui/material";
import io from "socket.io-client";

const socket = io("http://localhost:8001");

const VideoCall = () => {
  const [room, setRoom] = useState("");
  const [name, setName] = useState(""); // State for user name
  const [isCallActive, setIsCallActive] = useState(false);
  const [localStream, setLocalStream] = useState(null);
  const remoteVideoRef = useRef(null);
  const localVideoRef = useRef(null);
  const peerRef = useRef(new Map());

  const joinRoom = () => {
    socket.emit("joinRoom", { room, name });
    console.log(`Joining room: ${room}`);
    alert(`You joined the room: ${room}`);
  };

 const startCall = async () => {
  try {
    // Get local media stream
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    setLocalStream(stream);
    localVideoRef.current.srcObject = stream;

    // Create peer connection for this user
    const peerConnection = new RTCPeerConnection();
    peerRef.current.set(room, peerConnection);

    // Add local stream tracks to the peer connection
    stream.getTracks().forEach((track) => {
      peerConnection.addTrack(track, stream);
    });

    peerConnection.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("candidate", { candidate: event.candidate, room });
      }
    };

    peerConnection.ontrack = (event) => {
      console.log(`Received remote stream for room: ${room}`);
      const remoteStream = event.streams[0];
      remoteVideoRef.current.srcObject = remoteStream; // Set remote video stream
      alert("Connected to the other user!");
    };

    // Handle the case where there might be no tracks received
    peerConnection.oniceconnectionstatechange = () => {
      if (peerConnection.iceConnectionState === "disconnected") {
        console.log("Disconnected from the peer connection");
        alert("Disconnected from the other user.");
      }
    };

    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    socket.emit("offer", { offer, room });

    setIsCallActive(true);
  } catch (error) {
    console.error("Error starting the call:", error);
    alert("An error occurred while trying to start the call. Please check your camera and microphone permissions.");
  }
};


  useEffect(() => {
    socket.on("offer", async (data) => {
      const { offer, room } = data;
      console.log(`Received offer in room: ${room}`, offer);

      // Create peer connection for the incoming call
      const peerConnection = new RTCPeerConnection();
      peerRef.current.set(room, peerConnection);

      // Add local stream to the peer connection
      if (localStream) {
        localStream.getTracks().forEach((track) => {
          peerConnection.addTrack(track, localStream);
        });
      }

      await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(answer);
      socket.emit("answer", { answer, room });

      peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
          socket.emit("candidate", { candidate: event.candidate, room });
        }
      };

      peerConnection.ontrack = (event) => {
        console.log(`Received remote stream for room: ${room}`);
        const remoteStream = event.streams[0];
        remoteVideoRef.current.srcObject = remoteStream; // Set remote video stream
        alert("Connected to the other user!");
      };
    });

    socket.on("answer", (data) => {
      const { answer, room } = data;
      console.log(`Received answer in room: ${room}`, answer);
      const peerConnection = peerRef.current.get(room);
      peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
    });

    socket.on("candidate", (data) => {
      const { candidate, room } = data;
      console.log(`Received candidate in room: ${room}`, candidate);
      const peerConnection = peerRef.current.get(room);
      peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
    });

    socket.on("userJoined", (data) => {
      const { name } = data;
      alert(`${name} has joined the room!`); // Notify when a user joins
    });

    return () => {
      socket.off("offer");
      socket.off("answer");
      socket.off("candidate");
      socket.off("userJoined");
      peerRef.current.forEach((peerConnection) => peerConnection.close());
      peerRef.current.clear();
    };
  }, [localStream, room]);

  return (
    <div>
      <h2>Video Call</h2>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
      <TextField
        label="Room Name"
        variant="outlined"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        style={{ marginBottom: "10px" }}
      />
      <Button onClick={joinRoom} variant="contained" color="primary" disabled={!name}>
        Join Room
      </Button>
      <video ref={localVideoRef} autoPlay muted style={{ width: "300px", marginRight: "10px" }} />
      <video ref={remoteVideoRef} autoPlay style={{ width: "300px" }} />
      <Button onClick={startCall} variant="contained" color="primary" disabled={!room || isCallActive}>
        Start Call
      </Button>
      {isCallActive && (
        <Button onClick={() => {
          setIsCallActive(false);
          localStream.getTracks().forEach(track => track.stop()); // Stop local stream
        }} variant="contained" color="secondary">
          End Call
        </Button>
      )}
    </div>
  );
};

export default VideoCall;

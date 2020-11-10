import React, { useState, useEffect } from "react";
import queryString from "query-string"; //to retrieve data from URL
import io from "socket.io-client";
import InfoBar from "../../Layout/Chat/InfoBar";
import Input from "../../Layout/Chat/Input";
import TextContainer from "../../Layout/Chat/TextContainer";
import Messages from "../../Layout/Chat/Messages";

import "./Join.css";
let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // actioned at mount
  useEffect(() => {
    //retrieves data user added when joining
    const { name, room } = queryString.parse(location.search);

    //passing endpoint for the chat
    socket = io(process.env.REACT_APP_API_BASE_URL, {
      transports: ["websocket", "polling"],
    });

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
    return () => socket.disconnect();
  }, [process.env.REACT_APP_API_BASE_URL, location.search]);

  // actioned at send message
  useEffect(() => {
    // socket.on = listen for messages
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
    // socket.on = listen for roomData
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  //send messages
  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className='chat-background-image align-middle'>
      <div className='container p-2'>
        <div className='row justify-content-center'>
          <div className='col-md-9 mb-3'>
            <div className='text-center'>
              <h1 className='p-2'>
                Boop Instant Chat
                <span role='img' aria-label='emoji'>
                  💬
                </span>
              </h1>
              <h5 className='p-2 mb-4'>
                Get in touch with your dogsitter
                <span role='img' aria-label='emoji'>
                  ❤️
                </span>
              </h5>
            </div>
            <div className=' border border-info shadow'>
              <InfoBar room={room} />
              <Messages messages={messages} name={name} />
              <Input
                message={message}
                setMessage={setMessage}
                sendMessage={sendMessage}
              />
            </div>
          </div>
          <div className='col-md-3 '>
            <TextContainer users={users} room={room} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

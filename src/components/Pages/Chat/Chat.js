// import React, { useState, useEffect } from "react";
// import queryString from "query-string"; //to retrieve data from URL
// import io from "socket.io-client";

// import TextContainer from "../TextContainer/TextContainer";
// import Messages from "../Messages/Messages";
// import InfoBar from "../InfoBar/InfoBar";
// import Input from "../Input/Input";

// let socket;

// const Chat = ({ location }) => {
//   const [name, setName] = useState("");
//   const [room, setRoom] = useState("");
//   const [users, setUsers] = useState("");
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     //retrieves data user added when joining
//     const { name, room } = queryString.parse(location.search);
//     //passing endpoint for the chat
//     socket = io(process.env.REACT_APP_API_BASE_URL);

//     setRoom(room);
//     setName(name);

//     socket.emit("join", { name, room }, (error) => {
//       if (error) {
//         alert(error);
//       }
//     });
//   }, [process.env.REACT_APP_API_BASE_URL, location.search]);

//   useEffect(() => {
//     socket.on("message", (message) => {
//       setMessages((messages) => [...messages, message]);
//     });

//     socket.on("roomData", ({ users }) => {
//       setUsers(users);
//     });
//   }, []);

//   const sendMessage = (event) => {
//     event.preventDefault();

//     if (message) {
//       socket.emit("sendMessage", message, () => setMessage(""));
//     }
//   };

//   return (
//     <div className='outerContainer'>
//       <div className='container'>
//         <InfoBar room={room} />
//         <Messages messages={messages} name={name} />
//         <Input
//           message={message}
//           setMessage={setMessage}
//           sendMessage={sendMessage}
//         />
//       </div>
//       <TextContainer users={users} />
//     </div>
//   );
// };

// export default Chat;

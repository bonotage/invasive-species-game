// https://www.valentinog.com/blog/socket-react/

const express = require("express");
const path = require("path");
const http = require("http");
const { SocketAddress } = require("net");
// const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
// app.use(index);

app.use(express.static(path.join(__dirname, "build")));
// console.log(path.join(__dirname, "squid-game-draft/build"));

// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, "squid-game-draft/build", "index.html"));
// });

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
  // console.log(path.join(__dirname, "squid-game-draft/build/index.html"));
});

const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

// const io = socketIo(server);

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });

  socket.on("dropIn", function (data) {
    console.log("Received: 'data' " + data);
    io.sockets.emit("dropIn", data);
  });

  socket.on("wobble0", function (data) {
    console.log("Received: 'data' " + data);
    io.sockets.emit("wobble0", data);
  });
  socket.on("wobble1", function (data) {
    console.log("Received: 'data' " + data);
    io.sockets.emit("wobble1", data);
  });
  socket.on("wobble2", function (data) {
    console.log("Received: 'data' " + data);
    io.sockets.emit("wobble2", data);
  });
  socket.on("wobble3", function (data) {
    console.log("Received: 'data' " + data);
    io.sockets.emit("wobble3", data);
  });

  socket.on("wobble4", function (data) {
    console.log("Received: 'data' " + data);
    io.sockets.emit("wobble4", data);
  });

  socket.on("wobble5", function (data) {
    console.log("Received: 'data' " + data);
    io.sockets.emit("wobble5", data);
  });
});

// const cors = require("cors");
// const corsOptions = {
//   origin: "*",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };

// app.use(cors(corsOptions)); // Use this after the variable declaration

const getApiAndEmit = (socket) => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

server.listen(port, () => console.log(`Listening on port ${port}`));

// export default port;
// const express = require("express");
// const app = express();
// const socket = require("socket.io");
// const color = require("colors");
// const cors = require("cors");
// const { get_Current_User, user_Disconnect, join_User } = require("./users");

// app.use(express());

// const port = 8000;

// app.use(cors());

// var server = app.listen(
//   port,
//   console.log(`Server is running on the port no: ${port} `.green)
// );

// const io = socket(server);

// //initializing the socket io connection
// io.on("connection", (socket) => {
//   //for a new user joining the room
//   socket.on("joinRoom", ({ username, roomname }) => {
//     //* create user
//     const p_user = join_User(socket.id, username, roomname);
//     console.log(socket.id, "=id");
//     socket.join(p_user.room);

//     //display a welcome message to the user who have joined a room
//     socket.emit("message", {
//       userId: p_user.id,
//       username: p_user.username,
//       text: `Welcome ${p_user.username}`,
//     });

//     //displays a joined room message to all other room users except that particular user
//     socket.broadcast.to(p_user.room).emit("message", {
//       userId: p_user.id,
//       username: p_user.username,
//       text: `${p_user.username} has joined the chat`,
//     });
//   });

//   //user sending message
//   socket.on("chat", (text) => {
//     //gets the room user and the message sent
//     const p_user = get_Current_User(socket.id);

//     io.to(p_user.room).emit("message", {
//       userId: p_user.id,
//       username: p_user.username,
//       text: text,
//     });
//   });

//   //when the user exits the room
//   socket.on("disconnect", () => {
//     //the user is deleted from array of users and a left room message displayed
//     const p_user = user_Disconnect(socket.id);

//     if (p_user) {
//       io.to(p_user.room).emit("message", {
//         userId: p_user.id,
//         username: p_user.username,
//         text: `${p_user.username} has left the room`,
//       });
//     }
//   });
// });

// // https://www.valentinog.com/blog/socket-react/

// const express = require("express");
// const path = require("path");
// const http = require("http");
// const { SocketAddress } = require("net");
// // const socketIo = require("socket.io");

// const port = process.env.PORT || 4001;
// const index = require("./routes/index");

// const app = express();
// app.use(index);

// app.use(express.static(path.join(__dirname, "dist")));

// app.use((req, res) => {
//   res.sendFile(path.join(__dirname, "dist", "index.html"));
// });

// const server = http.createServer(app);
// const io = require("socket.io")(server, {
//   cors: {
//     origin: "*",
//   },
// });

// // const io = socketIo(server);

// let interval;

// io.on("connection", (socket) => {
//   console.log("New client connected");
//   if (interval) {
//     clearInterval(interval);
//   }
//   interval = setInterval(() => getApiAndEmit(socket), 1000);
//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//     clearInterval(interval);
//   });

//   socket.on("dropIn", function (data) {
//     console.log("Received: 'data' " + data);
//     io.sockets.emit("dropIn", data);
//   });

//   socket.on("wobble0", function (data) {
//     console.log("Received: 'data' " + data);
//     io.sockets.emit("wobble0", data);
//   });
//   socket.on("wobble1", function (data) {
//     console.log("Received: 'data' " + data);
//     io.sockets.emit("wobble1", data);
//   });
//   socket.on("wobble2", function (data) {
//     console.log("Received: 'data' " + data);
//     io.sockets.emit("wobble2", data);
//   });
//   socket.on("wobble3", function (data) {
//     console.log("Received: 'data' " + data);
//     io.sockets.emit("wobble3", data);
//   });

//   socket.on("wobble4", function (data) {
//     console.log("Received: 'data' " + data);
//     io.sockets.emit("wobble4", data);
//   });

//   socket.on("wobble5", function (data) {
//     console.log("Received: 'data' " + data);
//     io.sockets.emit("wobble5", data);
//   });
// });

// // const cors = require("cors");
// // const corsOptions = {
// //   origin: "*",
// //   credentials: true, //access-control-allow-credentials:true
// //   optionSuccessStatus: 200,
// // };

// // app.use(cors(corsOptions)); // Use this after the variable declaration

// const getApiAndEmit = (socket) => {
//   const response = new Date();
//   // Emitting a new message. Will be consumed by the client
//   socket.emit("FromAPI", response);
// };

// server.listen(port, () => console.log(`Listening on port ${port}`));
// // const express = require("express");
// // const app = express();
// // const socket = require("socket.io");
// // const color = require("colors");
// // const cors = require("cors");
// // const { get_Current_User, user_Disconnect, join_User } = require("./users");

// // app.use(express());

// // const port = 8000;

// // app.use(cors());

// // var server = app.listen(
// //   port,
// //   console.log(`Server is running on the port no: ${port} `.green)
// // );

// // const io = socket(server);

// // //initializing the socket io connection
// // io.on("connection", (socket) => {
// //   //for a new user joining the room
// //   socket.on("joinRoom", ({ username, roomname }) => {
// //     //* create user
// //     const p_user = join_User(socket.id, username, roomname);
// //     console.log(socket.id, "=id");
// //     socket.join(p_user.room);

// //     //display a welcome message to the user who have joined a room
// //     socket.emit("message", {
// //       userId: p_user.id,
// //       username: p_user.username,
// //       text: `Welcome ${p_user.username}`,
// //     });

// //     //displays a joined room message to all other room users except that particular user
// //     socket.broadcast.to(p_user.room).emit("message", {
// //       userId: p_user.id,
// //       username: p_user.username,
// //       text: `${p_user.username} has joined the chat`,
// //     });
// //   });

// //   //user sending message
// //   socket.on("chat", (text) => {
// //     //gets the room user and the message sent
// //     const p_user = get_Current_User(socket.id);

// //     io.to(p_user.room).emit("message", {
// //       userId: p_user.id,
// //       username: p_user.username,
// //       text: text,
// //     });
// //   });

// //   //when the user exits the room
// //   socket.on("disconnect", () => {
// //     //the user is deleted from array of users and a left room message displayed
// //     const p_user = user_Disconnect(socket.id);

// //     if (p_user) {
// //       io.to(p_user.room).emit("message", {
// //         userId: p_user.id,
// //         username: p_user.username,
// //         text: `${p_user.username} has left the room`,
// //       });
// //     }
// //   });
// // });

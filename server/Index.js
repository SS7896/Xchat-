const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// 实时通信核心逻辑
io.on('connection', (socket) => {
  console.log('新用户已连接');

  socket.on('sendMessage', (message) => {
    io.emit('newMessage', message); // 广播消息给所有人
  });

  socket.on('disconnect', () => {
    console.log('用户已断开连接');
  });
});

server.listen(3000, () => {
  console.log('后端服务运行在 http://localhost:3000');
});

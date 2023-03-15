const express = require('express');
const http = require('http');
const { json } = require('stream/consumers');
const playerSchema = require('../src/app/schemas/Player');
const Room =require('../src/app/schemas/Player');

const io = require('socket.io')(3001,{
  cors: {
    origin: ["http://localhost:4200/"],
  },
});

io.on('connection', (socket) => {

    
});
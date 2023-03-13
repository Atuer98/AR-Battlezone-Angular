const express = require('express');
const http = require('http');
const io = require('socket.io')(3001,{
  cors: {
    origin: ["http://localhost:4200/"],
  },
});

//const app = express();
//const server = http.createServer(app);
//const io = socketIO(server);

//previews code
io.on('connection', (socket) => {
  console.log('New user connected: ', socket.id);

  socket.on('isMoving', (x,y) => {
    console.log("this is the x: ",x, " and this is y: ",y);
  });

  socket.on('joinRoom', (RoomId)=> {
    console.log('in server on joinRoom:', RoomId);
    socket.join(RoomId);
  })

  socket.on('sendMessage', (message, room) => {
    if(room===""){
      socket.broadcast.emit('recieveMessage', (message));
      console.log('displaying follwoing message: ',message, " an this is the Room(socket.id): ",room);
    }else{
      socket.to(room).emit('recieveMessage',(message))
      console.log('displaying follwoing message: ',message, " an this is the Room(socket.id): ",room);
    }
  });

  socket.on('doubleClick', (x,y)=>{
    console.log("this is the x: ",x, " and this is y: ",y);
  });



  //new code
  console.log('a user connected ');
  io.emit('rooms', getRooms('connected'));
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('new room', function(room){
	  console.log(`A new room is created ${room}`);
	  socket.room = room;
	  socket.join(room);
  	  io.emit('rooms', getRooms('new room'));
  });
  socket.on('join room', function(room){
	  console.log(`A new user joined room ${room}`);
	  socket.room = room;
	  socket.join(room);
  	  io.emit('rooms', getRooms('joined room'));
  });
  socket.on('chat message', function(data){
    io.in(data.room).emit('chat message', `${data.name}: ${data.msg}` );
  });
  socket.on('set username', function(name){ 
	  console.log(`username set to ${name}(${socket.id})`);
	  socket.username = name; 
  });

  socket.on('connect', function(){
    console.log('connected to the server');
  } );

  socket.on('gamecode', function(text1){
    console.log('gamecode is: ', text1);
  })

  socket.on('gamecode_opponent', function(text1){
    console.log('gamecode_opponent is: ', text1);
  })
});



function getRooms(msg){
  const nsp = io.of('/');
  const rooms = nsp.adapter.rooms;
  /*Returns data in this form
  {
    'roomid1': { 'socketid1', socketid2', ...},
    ...
  }
  */
  //console.log('getRooms rooms>>' + util.inspect(rooms));

  const list = {};
	
  for(let roomId in rooms){
	  const room = rooms[roomId];
	  if (room===undefined) continue;
	  const sockets = [];
	  let roomName = "";
	  //console.log('getRooms room>>' + util.inspect(room));
	  for(let socketId in room.sockets){
		  const socket = nsp.connected[socketId];
		  if (socket===undefined || socket.username===undefined || socket.room===undefined) continue;
		  //console.log(`getRooms socket(${socketId})>>${socket.username}:${socket.room}`);
		  sockets.push(socket.username);
		  if (roomName=="") roomName = socket.room;
	  }
	  if (roomName!="") list[roomName] = sockets;
  }
	
  //console.log(`getRooms: ${msg} >>` + util.inspect(list));
	
  return list;
}

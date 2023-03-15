//import {express }from 'express';
//import {http } from 'http';
//import { SocketioService} from './../src/app/socketioService';
const http = require('http');
const { json } = require('stream/consumers');
const playerSchema = require('../src/app/schemas/Player');
const Room =require('../src/app/schemas/Player');
//const  SocketioService= require('C:/Users/abtuer/setup/AR-Battlezone/AR-Battlezone-Angular/src/app/socketioService.ts');
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

  socket.on('isMoving', (x,y,z) => {
    console.log("this is the x: ",x, " and this is y: ",y);
    //webxr call
  });

  socket.on('normalAttack',(atk, aim) =>{
     //webxr
  })

  socket.om('hit',(player, life) =>{
    //player life --
  });

  socket.on('game-over',(result)=> {
    //end game
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

  socket.on('chat message', function(data){
    io.in(data.room).emit('chat message', `${data.name}: ${data.msg}` );
  });
  socket.on('set username', function(name){ 
	  console.log(`username set to ${name}(${socket.id})`);
	  socket.username = name; 
  });


  socket.on('notify-session-created',(msg)=>{
    console.log(msg);
  });
  
  socket.on('join room', (code)=>{
    room =code;
	  console.log(`A new user joined room with the code ${code}`);
    //i changed room to code because we are sending codes
    
	  socket.join(code);
    socket.to(code).emit("we here","we joined session");//sendet  nicht?
    socket.emit("somebodyJoined", "there is a room now with this code: ", code);
  	//io.emit('rooms', getRooms('joined room'));
  });

  socket.on('somebodyJoined', (msg,code)=>{
    console.log(msg,code)
  });

  socket.on('createSession', async (roomId,code1, code2 )=> {
    //SocketioService.roomCreated(code1,code2);
    console.log('createsession with id: '+roomId+' with codes: ', code1, code2);
    socket.emit("session created", code1,code2);
    socket.join(code2);
    socket.to(code2).emit("we here","we created session");//sendet  nicht?
    /*
    //creating room
    let room  = Room;
    //init room //we need players array,turn
    let player = {
      socketID: socket.id,
      code1: code1,
      code2: code2,
      plyerType: 'X', //to see who created the room
    }
    // player stored in the room

    //room.players.push(player); 
    //room.turn = player;
    const roomIdNew = room._id;
    console.log("roomIdNow is this: ", roomIdNew)
    //api call to save in MongoDB
    //await room.save(); 
    socket.join(roomIdNew);
    io.to(roomIdNew).emit("createRoomSuccess", room);
    */
  });

  socket.on('we here',(msg)=> {
    console.log(msg);
  });

  socket.on('roomCreated',(msg, code1,code2)=>{
    console.log(msg,code1,code2);
  })

  socket.on('charecter selection', (name)=> {
    socket.to(code2).emit('name',name);
    console.log('the name is:', name);
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

import { Component, Input, OnInit } from "@angular/core";
import { io } from "socket.io-client";

@Component({
  selector: 'join-game',
  templateUrl: './joinGameComponent.html'
})
export class JoinGameComponent implements OnInit{
  socket :any;
  @Input() code :string;


  constructor(){
      console.log("we are in JoinGame");
      this.socket = io('http://localhost:3001');
      this.socket.on('createRoomSuccess', (room:any)=> {
        console.log(room);
      })
      this.code="";
  }

  ngOnInit():void{
      console.log("we are in JoinGame ngoninit");        
      //this.socket.emit('join room',this.code);
    }

    joinGame(){
      console.log("joinging room with code: ",this.code)
      //this.socket.emit('join room',this.code);
      //await this.socket.join(this.code);
      this.socket.emit("somebodyJoined","we joined with code: ", this.code);
    }
}
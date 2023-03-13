import { Component, OnInit } from "@angular/core";
import { io } from "socket.io-client";

@Component({
    selector: 'join-game',
    templateUrl: './joinGameComponent.html'
  })
  export class JoinGameComponent implements OnInit{
    socket :any;

    constructor(){
        console.log("we are in JoinGame");
    }

    ngOnInit():void{
        console.log("we are in JoinGame ngoninit");        
        this.socket = io('http://localhost:3001');
        this.socket.emit('join room',this.socket.id);
      }
  }
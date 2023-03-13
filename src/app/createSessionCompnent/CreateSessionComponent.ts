import { Component, OnInit } from "@angular/core";
import { io } from "socket.io-client";

@Component({
    selector: 'create-session',
    templateUrl: './createSessionComponent.html',
    styleUrls: ['./CreateSessionComponent.css']
  })
  export class CreateSessionComponent implements OnInit{
    socket :any;

    constructor(){
        console.log("we are in createSession");
    }

    ngOnInit():void{
        console.log("we are in createSession ngoninit");        
        this.socket = io('http://localhost:3001');
        this.socket.emit('inCreate',"we eating good in da 2. comp");
      }
  }
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { io } from "socket.io-client";

@Component({
    selector: 'create-session',
    templateUrl: './createSessionComponent.html',
    styleUrls: ['./CreateSessionComponent.css']
  })
export class CreateSessionComponent implements OnInit{
  socket :any;
  @Input() code1 :string;
  @Input() code2 : string;
  
  constructor(){
      console.log("we are in createSession");
      this.socket = io('http://localhost:3001');
      this.code1=this.code2="";
  }

  ngOnInit():void{
      console.log("we are in createSession ngoninit");        
      //this.socket.emit('inCreate',"we arrived in createsession component");
    }

    createSession(){
      console.log("create session");
      this.socket.emit('createSession',this.socket.id, this.code1, this.code2);
      
    }
}
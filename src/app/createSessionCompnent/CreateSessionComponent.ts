import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { io } from "socket.io-client";
import { SharedDataService } from "../sharedDataService";

@Component({
    selector: 'create-session',
    templateUrl: './createSessionComponent.html',
    styleUrls: ['./CreateSessionComponent.css']
  })
export class CreateSessionComponent implements OnInit{
  socket :any;
  apiResponse: any;
  @Input() code1 :string;
  @Input() code2 : string;
  userObj:any;

  constructor(private sharedDataService: SharedDataService){
      console.log("we are in createSession");
      this.socket = io('http://localhost:3001');
      this.code1=this.code2="";
  }

  ngOnInit():void{
      //this.socket.emit('inCreate',"we arrived in createsession component");
      this.sharedDataService.apiResponse$.subscribe(data => {
        // Update the component's property with the received data
        this.apiResponse = data;
        console.log("shared dated service returned in create game", data);
      });
      
    }

    createSession(){
      console.log("create session", this.socket.id);  
      this.socket.emit('createSession',this.socket.id, this.code1, this.code2);
    }
}
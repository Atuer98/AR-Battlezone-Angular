import { Component, Input, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { io } from "socket.io-client";
import { SharedDataService } from "../sharedDataService";
import { Server, WebSocket } from "ws";
@Component({
  selector: 'join-game',
  templateUrl: './joinGameComponent.html'
})
export class JoinGameComponent implements OnInit{
  socket :any;
  @Input() code :string;
  apiResponse :any;
  dataSubject = new Subject<any>();


  constructor(private sharedDataService: SharedDataService){
      console.log("we are in JoinGame");
      this.socket = io('http://localhost:3001');
      this.code="";
  }

  ngOnInit():void{
      console.log("we are in JoinGame ngoninit");  
      this.socket.on('api-response', (data:any) => {
          console.log("this the code: ", data)
      }); 
      /* 
      this.socket.on('secoundcode', (code:any)=> {
        console.log("this is joined code", code);
        this.code=code;
        this.apiResponse=code;
      })  
      */  
      this.sharedDataService.apiResponse$.subscribe(data => {
        // Update the component's property with the received data
        this.apiResponse = data;
        console.log("shared dated service returned in JoinGame", data);
      });
      this.dataSubject.subscribe(data => {
        console.log("it works", data);
        this.apiResponse = data;
      });
      
    }

    joinGame(){
      console.log("joinging room with code: ",this.code)
      //this.socket.emit('join room',this.code);
      //await this.socket.join(this.code);
      this.socket.emit("somebodyJoined","we joined with code: ", this.code);
    }
}
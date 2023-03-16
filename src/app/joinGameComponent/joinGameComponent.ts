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

  constructor(private sharedDataService: SharedDataService){
      console.log("we are in JoinGame");
      this.socket = io('http://localhost:3001');
      this.code="";
      
  }

  ngOnInit():void{
      this.socket.on('api-response', (data:any) => {
          console.log("this the code: ", data)
      }); 
      this.sharedDataService.joinerCode$.subscribe(data => {
        // Update the component's property with the received data
        this.apiResponse = data;
        console.log("shared dated service returned in JoinGame", data);
      });
      console.log("fetching in joinG");
      //this.apiResponse =this.fetchCode();

    }
    fetchCode(){
      let result =this.sharedDataService.getJoinerCode();
      console.log("this is fetchdoe:", result);
      return result;
    }

    joinGame(){
      console.log("joinging room with code: ",this.code)
      //this.socket.emit('join room',this.code);
      //await this.socket.join(this.code);
      this.socket.emit("somebodyJoined","we joined with code: ", this.code);
    }
}
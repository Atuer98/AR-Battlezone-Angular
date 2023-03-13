import { Component, OnInit } from "@angular/core";
import { io } from "socket.io-client";

@Component({
    selector: 'high-score',
    templateUrl: './highScoreComponent.html'
  })
  export class HighScoreComponent implements OnInit{
    socket :any;

    constructor(){
        console.log("we are in highscore");
    }

    ngOnInit():void{
        console.log("we are in highscore ngoninit");        
        this.socket = io('http://localhost:3001');
        this.socket.emit('inHighs',"we eating good in da highscore. comp");
      }
  }
import { Component, OnInit } from "@angular/core";
import { io } from "socket.io-client";

@Component({
    selector: 'arena-selection',
    templateUrl: './ArenaSelectionComponent.html'
  })
  export class ArenaSelectionComponent implements OnInit{
    socket :any;

    constructor(){
        console.log("we are in JoinGame");
    }

    ngOnInit():void{
        console.log("we are in ArenaSelectionComponent ngoninit");        
        this.socket = io('http://localhost:3001');
        this.socket.emit('inArena',"we eating good in da ArenaSelectionComponent. comp");
      }
  }
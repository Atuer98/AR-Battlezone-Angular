import { Component, Input, OnInit } from "@angular/core";
import { io } from "socket.io-client";

@Component({
    selector: 'charecter-selection',
    templateUrl: './CharacterSelectionComponent.html'
  })
  export class CharacterSelectionComponent implements OnInit{
    socket :any;
    @Input() name: string;
    constructor(){
        console.log("we are in charecter selesction");
        this.socket = io('http://localhost:3001');
        this.name="";
        
    }

    ngOnInit():void{
        console.log("we are in charecter selection ngoninit");        
        this.socket.on("session created",(code1: any,code2: any)=> {
          console.log("a session was cereated with the codes: ",code1,code2);
        });
      }
    

    submitCharecter(event: Event){
      console.log(event);
      this.socket.emit('charecter selection', event);
    }
  }
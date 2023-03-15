import { Component, OnInit } from "@angular/core";
import { io } from "socket.io-client";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'index',
    templateUrl: './IndexComponent.html'
})
export class IndexComponent implements OnInit{
  socket :any;

  constructor(private route: Router){
      console.log("we are in createSession");
  }

  ngOnInit():void{
      console.log("we are in index ngoninit");        
      this.socket = io('http://localhost:3001');
      this.socket.emit('index',"we eating good in da index comp");
  }
  onNewGame(){
    this.route.navigateByUrl('/createsession');
  }
  onJoinGame(){

  }
  onHighScore(){

  }
}
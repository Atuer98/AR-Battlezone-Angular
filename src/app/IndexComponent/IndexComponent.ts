import { Component, OnInit } from "@angular/core";
import { io } from "socket.io-client";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SharedDataService } from "../sharedDataService";

@Component({
    selector: 'index',
    templateUrl: './IndexComponent.html'
})
export class IndexComponent implements OnInit{
  socket :any;
  userObj:any;
  apiResponse:any;
  constructor(private route: Router, private sharedDataService: SharedDataService){
      console.log("we are in createSession");
      this.socket = io('http://localhost:3001');
  }

  ngOnInit():void{
      console.log("we are in index ngoninit");        
      //this.socket.emit('index',"we eating good in da index comp");
      this.socket.on('api-response', (data:any) => {
        console.log('this is api response:', data);
        this.apiResponse = data;
        this.sharedDataService.setApiResponse(data);
      });
  }
  onNewGame(){
    this.userObj= 
        {
          "active": true,
          "generatedOn": "2023-03-16T07:39:13.124Z",
          "player1code": "string",
          "player2code": "string",
          "player1healthpoints": 0,
          "player2healthpoints": 0,
          "player1highscore": 0,
          "player2highscore": 0,
          "player1positionx": 0,
          "player1positiony": 0,
          "player1positionz": 0,
          "player2positionx": 0,
          "player2positiony": 0,
          "player2positionz": 0,
          "player1weapon": 0,
          "player2weapon": 0,
          "player1character": 0,
          "player2character": 0,
          "player1won": true,
          "player2won": true
        };
        
      //this.socket.emit('createSession',this.socket.id, this.code1, this.code2);
      console.log("we emitting");
      this.socket.emit(
        'init', this.userObj.active, this.userObj.generatedOn, this.userObj.player1code,
        this.userObj.player2code, this.userObj.player1healthpoints, this.userObj.player2healthpoints,
        this.userObj.player1highscore, this.userObj.player2highscore, this.userObj.player1positionx, this.userObj.player1positiony, this.userObj.player1positionz,
        this.userObj.player2positionx, this.userObj.player2positiony, this.userObj.player2positionz, this.userObj.player1weapon, this.userObj.player2weapon, 
        this.userObj.player1won, this.userObj.player2won
      );
    this.route.navigateByUrl('/createsession');
  }
  onJoinGame(){

  }
  onHighScore(){

  }
}
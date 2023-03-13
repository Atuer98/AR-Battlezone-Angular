import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import  io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  socket:any;
  public moves: string[] = [];
  username:string | undefined;
  joinRoomButton = document.getElementById("room-button");
  messageInput :any= document.getElementById("message-input");
  roomInput:any = document.getElementById("room-input");
  form = document.getElementById("form");
  isDragging = false;
  dragBox = '';
  box!: HTMLElement;
  private isMouseDown: boolean = false;
  private mouseX!: number;
  private mouseY!: number;
  private elementX!: number;
  private elementY!: number;
  public message: string;
  public room : string;
  public displayedMessages: string;


  constructor(private renderer: Renderer2, private elementRef: ElementRef){
    this.message="";
    this.room="";
    this.displayedMessages="";
    
  }

  displayMessage(message : any){
    //this.displayedMessages = this.message;
    console.log("in displayMessage", message.target.value);
    this.socket.emit('sendMessage', message.target.value, this.socket.id);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isMouseDown) {
      const deltaX = event.clientX - this.mouseX;
      const deltaY = event.clientY - this.mouseY;
      this.renderer.setStyle(this.box, 'left', `${this.elementX + deltaX}px`);
      this.renderer.setStyle(this.box, 'top', `${this.elementY + deltaY}px`);
    }
    //console.log('emitting isMoving');
    //this.socket.emit('isMoving',(event.clientX,event.clientY));
  }

  onBoxMouseDown(event: MouseEvent): void {
    this.isMouseDown = true;
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
    this.elementX = this.box.offsetLeft;
    this.elementY = this.box.offsetTop;
    console.log("onBoxMouseDown: x:",event.clientX,"y:",event.clientY);
    this.isDragging = true;
  }


  onDoubleClick(event : MouseEvent):void {
    this.isMouseDown=false;
    this.isDragging=false;
    console.log("this is the doubleClick  positon: x: ", event.clientX, "   and y: ", event.clientY);
    console.log('emitting OnDoubleClick');
    this.socket.emit('doubleClick', event.clientX, event.clientY );
  }

  ngOnInit():void{
    this.box = this.elementRef.nativeElement.querySelector('.example-box');
    this.socket = io('http://localhost:3001');
    this.socket.emit('hello',"we eating good");
  }
  joinRoom(event : any) {
    console.log("JoinRoom in AppComponent: ", event.target.value);
    this.socket.emit('joinRoom', event.target.value);
  }

  makeMove(move: string) {
    //this.socket.emit('move', move);
  }

}


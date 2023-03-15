import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000'); // Replace with your server URL
  }

  joinRoom(roomName: string, username: string) {
    this.socket.emit('join', { roomName, username });
  }

  leaveRoom(roomName: string, username: string) {
    this.socket.emit('leave', { roomName, username });
  }

  roomCreated(code1:string, code2: string){
    this.socket.emit('roomCreated',"we did it", code1,code2);
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private apiResponse: any;
  private jCode:any;
  private apiResponseSource = new Subject<any>();
  private joinerCodeSource = new Subject<any>();
  //shared data disterbute to all tabs
  private worker: SharedWorker;

  apiResponse$ = this.apiResponseSource.asObservable();
  joinerCode$ = this.joinerCodeSource.asObservable();

  constructor() {
    this.worker = new SharedWorker('./shared-worker', 'my-worker');
    this.worker.port.start();
  }

  setApiResponse(data: any, code:any) {
    console.log("sharedworker", this.worker);
    console.log("shared dated service setted data: ", data);
    this.worker.port.postMessage({action:'set-data', data:data})
    this.apiResponse = data;
    this.jCode=code;
    this.apiResponseSource.next(this.apiResponse);
  }

  getApiResponse(): any {
    console.log("shared dated service returns data.");
    return (this.apiResponse, this.jCode);
  }
  setJoinerCode(data:any){
    console.log("set joinercode: ",data);
    this.jCode=data;
    this.joinerCodeSource.next(this.jCode);
  }
  getJoinerCode(){
    console.log("getJoinerCode in sharedService", this.jCode);
    return this.jCode;
  }
}
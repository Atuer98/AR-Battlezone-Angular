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

  apiResponse$ = this.apiResponseSource.asObservable();
  joinerCode$ = this.joinerCodeSource.asObservable();

  setApiResponse(data: any) {
    console.log("shared dated service setted data: ", data);
    this.apiResponse = data;
    this.apiResponseSource.next(this.apiResponse);
  }

  getApiResponse(): any {
    console.log("shared dated service returns data.");
    return this.apiResponse;
  }
  setJoinerCode(data:any){
    console.log("set joinercode: ",data);
    this.jCode=data;
    this.joinerCodeSource.next(this.jCode);
  }
  getJoinerCode(){
    return this.jCode;
  }
}
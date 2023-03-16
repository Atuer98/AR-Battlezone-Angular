import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private apiResponse: any;
  private apiResponseSource = new Subject<any>();

  apiResponse$ = this.apiResponseSource.asObservable();

  setApiResponse(data: any) {
    console.log("shared dated service setted data: ", data);
    this.apiResponse = data;
    this.apiResponseSource.next(this.apiResponse);
  }

  getApiResponse(): any {
    console.log("shared dated service returns data.");
    return this.apiResponse;
  }
  damn(){
    console.log("damn");
  }
}
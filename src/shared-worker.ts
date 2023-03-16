export class MySharedWorker {
    private sharedData: any = "";
  
    constructor() {
      // initialize your shared data here
    }
  
    public getCode1(): any {
        console.log("getcode1", this.sharedData);
      return this.sharedData;
    }
  
    public setCode1(data: any): void {
        console.log("setcode1",data);
        this.sharedData = data;
    }
  }
  
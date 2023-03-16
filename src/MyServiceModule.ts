import { NgModule } from '@angular/core';
import { SharedDataService } from './app/sharedDataService';

@NgModule({
  providers: [
    SharedDataService
  ],
  exports: [
    SharedDataService
  ]
})
export class MyServiceModule {}

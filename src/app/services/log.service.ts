import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
  
  
  log(name) {
     console.log(`I am invoked by ${name}`);
  }
}

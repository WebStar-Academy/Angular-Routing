import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  checkBalance() {
    // 3 lines of code
  }


  log(name) {
    console.log(`I am invoked by ${name}`)
  }
}

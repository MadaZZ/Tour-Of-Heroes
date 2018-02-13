import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  
  messages: string[]=[];//created a string message
  
  //below is add function that adds message to the cache
  add(message1:string){
    this.messages.push(message1);
  }

  //clears the message off the cache
  clear(){
    //this.messages=['cleared'];
    this.messages=[];
  }

  constructor() { }

}

import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  message = [
    {id: 0, text: "You've got mail!"},
    {id: 1, text: "What's good bro?"},
    {id: 2, text: "You busy?"}
  ];

  update(id, text){
    this.message = this.message.map(m => m.id === id ? {id, text} : m);
  }

  constructor() { }

}

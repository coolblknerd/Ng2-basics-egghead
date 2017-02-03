import { Component, Inject } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  template: `<div>

  <ul>
    <li *ngFor="let message of mail.message">{{message.text}}</li>
  </ul>

    <ul>
      <app-simple-form *ngFor="let message of mail.message"
      [message]="message.text"
      (update)="onUpdate(message.id, $event.text)">

      </app-simple-form>
    </ul>

  </div>`,
  styles: [`
    app-simple-form {
      margin-bottom: 10px;
    }
    `]
})
export class AppComponent {

  onUpdate(id, text){
    this.mail.update(id, text)
  }

  title = 'app works!';

  constructor(
    @Inject('mail') private mail,
    @Inject('api') private api,
  ) {}
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input
      #myInput
      type="text"
      [(ngModel)]="message"
      [ngClass]="{mousedown:isMousedown}"
      (mousedown)="isMousedown = false"
      (mouseup)="isMousedown = false"
      (mouseleave)="isMousedown = false"
      >
      <button (click)="update.emit({text:message})">Click Me!</button>
    </div>
  `,
  styles: [
    `
    :host{
      display: flex;
      flex-direction: column;
    }

    .mousedown{
      border: 2px solid green;
    }
    `

  ]
})
export class SimpleFormComponent implements OnInit {

  isMousedown;

  @Input() message;

  @Output() update = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }

}

// Notes

// The #myInput is a reference that can be used as a parameter into the function
// used for a event

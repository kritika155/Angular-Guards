import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  message: string = 'Hey Angular!';
  @Input() childMessage?: string;
  @Output() messageEvent = new EventEmitter<string>();
  constructor() {}

  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}

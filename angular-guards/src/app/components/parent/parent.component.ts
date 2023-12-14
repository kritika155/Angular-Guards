import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  parentMessage = 'message from parent';
  message: string = "Hi!It's Kritika";

  receiveMessage($event: any) {
    this.message = $event;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bubbling',
  templateUrl: './event-bubbling.component.html',
  styleUrls: ['./event-bubbling.component.scss']
})
export class EventBubblingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onDivClick(event: any) {
    console.log('div clicked');
  }

  onSave(event: any) {
    event.stopPropagation();
    console.log('button clicked', event);
  }

}

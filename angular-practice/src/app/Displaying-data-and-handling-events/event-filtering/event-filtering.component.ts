import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-filtering',
  templateUrl: './event-filtering.component.html',
  styleUrls: ['./event-filtering.component.scss']
})
export class EventFilteringComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUP(event: any) {
    console.log('enter was pressed');
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.scss']
})
export class ChildToParentComponent implements OnInit {

  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.change.emit(true);
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html',
  styleUrls: ['./parent-to-child.component.scss']
})
export class ParentToChildComponent implements OnInit {

  @Input() isFavorite: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log('isFavorite', this.isFavorite);
  }

}

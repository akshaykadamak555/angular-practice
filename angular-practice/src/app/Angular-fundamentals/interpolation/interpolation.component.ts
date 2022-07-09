import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {


  public title = "List of cources";


  constructor() { }

  ngOnInit(): void {
  }

}

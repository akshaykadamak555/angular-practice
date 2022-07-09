import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  courses = [1,2,3,4];

  viewMode = 'map';
  constructor() { }

  ngOnInit(): void {
  }

}

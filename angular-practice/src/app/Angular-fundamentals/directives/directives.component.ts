import { Component, OnInit } from '@angular/core';
import { CourceserviceService } from '../service/courceservice.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  public cources: Array<string>;

  constructor(service: CourceserviceService) {
    this.cources = service.getCourses();
   }

  ngOnInit(): void {
  }

}

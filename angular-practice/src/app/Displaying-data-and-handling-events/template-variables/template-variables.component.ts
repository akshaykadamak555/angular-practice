import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.scss']
})
export class TemplateVariablesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUP(email: any) {
    console.log('email', email);
  }
}

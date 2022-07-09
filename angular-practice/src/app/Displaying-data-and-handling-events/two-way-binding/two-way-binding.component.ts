import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss']
})
export class TwoWayBindingComponent implements OnInit {
  email = 'mail@gmal.com';

  constructor() { }

  ngOnInit(): void {
  }

  onKeyUP() {
    console.log(this.email);
  }

}

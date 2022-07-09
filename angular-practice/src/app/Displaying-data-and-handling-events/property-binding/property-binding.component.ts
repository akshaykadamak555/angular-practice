import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  imagePath = 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg';
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-practice';

  favorite = true;

  constructor(private router: Router){}

  loginForm = new FormGroup({
    userId: new FormControl(),
    passWord: new FormControl()
  });


  onChange(event: any) {
    console.log('output event', event);
  }

  navigate() {
this.router.navigate(['/crud']);
  }

  onSubmit() {
    console.log('form', this.loginForm.value);
    let users = [{name : 'Bhai', password : '12bro'},
     {name : 'Behan', password : '12sis'},
      {name : 'broo', password : '12sir'}]

      const userData = users.find(element => element.name.toLowerCase() === this.loginForm.value.userId.toLowerCase());
      console.log('array obj',userData);

      if (userData) {
        if (userData.password === this.loginForm.value.passWord) {
          console.log('valid user');
        } else {
          console.log('invalid user');
        }
      }
  }
}

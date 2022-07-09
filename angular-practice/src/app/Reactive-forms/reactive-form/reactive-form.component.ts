import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  commentForm: any;

  form = new FormGroup({
    userName: new FormControl('', Validators.required),
    passWord: new FormControl()
  });

  constructor(fb: FormBuilder) {
    this.commentForm = fb.group({
      comment: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  get userName() {
    return this.form.get('userName');
  }

  submitComment() {
    console.log('comment form',this.commentForm.value);
  }

}

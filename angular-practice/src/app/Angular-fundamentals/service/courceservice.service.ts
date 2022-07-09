import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourceserviceService {

  constructor() { }

  getCourses() {
    return ['course 1', 'course 2'];
  }
}

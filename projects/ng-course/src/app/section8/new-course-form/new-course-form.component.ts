import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  form;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      contact: this.fb.group({
        telephone: ['', Validators.required],
        email: ['', Validators.required]
      }),
      _topics: this.fb.array([])
    });
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  deleteTopic(topic: FormControl) {
    let i = this.topics.indexOf(topic);
    this.topics.splice(i, 1);
  }

  get topics() {
    return this.form.get('_topics').controls;
  }
}

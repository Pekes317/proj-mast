import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Headers, Http } from '@angular/http';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-pm-contact',
  templateUrl: './pm-contact.component.html',
  styleUrls: ['./pm-contact.component.scss']
})
export class PmContactComponent implements OnInit {
  contactForm: FormGroup;
  email: FormControl = new FormControl('', Validators.required);
  message: FormControl = new FormControl('', Validators.required);
  sender: FormControl = new FormControl('', Validators.required);
  url: string = 'email/'

  constructor(private http: Http, private snack: MdSnackBar) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      email: this.email,
      message: this.message,
      sender: this.sender
    })
  }

  getMessage(text) {
    this.snack.open(text, 'Okay', {
      duration: 5000
    });
    this.contactForm.reset();
  }

  sendEmail() {
    let call = `email=${this.email.value}` +
      `&message=${this.message.value}` +
      `&sender=${this.sender.value}`;

    let header = new Headers();
    header.append('Content-Type', 'application/x-www-form-urlencoded');

    let post = this.http.post(this.url, call,
      {
        headers: header
      }).map(res => res.text())
      .subscribe(
      res => {
        console.log(res);
        this.getMessage(res);
      },
      err => {
        console.log(err);
        this.getMessage(err);
      },
      () => {
        post.unsubscribe();
      });
  }
}

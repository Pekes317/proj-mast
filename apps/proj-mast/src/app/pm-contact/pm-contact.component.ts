import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { map } from 'rxjs/operators';

@Component({
  selector: 'pm-contact',
  templateUrl: './pm-contact.component.html',
  styleUrls: ['./pm-contact.component.scss'],
})
export class PmContactComponent implements OnInit {
  contactForm: FormGroup;
  email: FormControl = new FormControl('', Validators.required);
  message: FormControl = new FormControl('', Validators.required);
  sender: FormControl = new FormControl('', Validators.required);
  url = '/api/emails';

  constructor(private http: HttpClient, private snack: MatSnackBar) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      email: this.email,
      message: this.message,
      sender: this.sender,
    });
  }

  getMessage(text: string) {
    this.snack.open(text, 'Okay', {
      duration: 5000,
    });
    this.contactForm.reset();
  }

  sendEmail() {
    const post = this.http
      .post(this.url, this.contactForm.value)
      .pipe(map(res => res.toString()))
      .subscribe(
        res => {
          console.log(res);
          this.getMessage('Thank you, the message was Sent.');
        },
        err => {
          console.error(err);
          this.getMessage('Sorry,the message failed to Send.');
        },
        () => {
          post.unsubscribe();
        },
      );
  }
}

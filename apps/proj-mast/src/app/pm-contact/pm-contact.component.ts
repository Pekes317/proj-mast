import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { map } from 'rxjs/operators';

@Component({
  selector: 'pm-contact',
  templateUrl: './pm-contact.component.html',
  styleUrls: ['./pm-contact.component.scss']
})
export class PmContactComponent implements OnInit {
  contactForm: FormGroup;
  email: FormControl = new FormControl('', Validators.required);
  message: FormControl = new FormControl('', Validators.required);
  sender: FormControl = new FormControl('', Validators.required);
  url = 'email/';

  constructor(private http: HttpClient, private snack: MatSnackBar) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      email: this.email,
      message: this.message,
      sender: this.sender
    });
  }

  getMessage(text: string) {
    this.snack.open(text, 'Okay', {
      duration: 5000
    });
    this.contactForm.reset();
  }

  sendEmail() {
    const call = `email=${this.email.value}` + `&message=${this.message.value}` + `&sender=${this.sender.value}`;

    const header = new HttpHeaders();
    header.append('Content-Type', 'application/x-www-form-urlencoded');

    const post = this.http
      .post(this.url, call, {
        headers: header
      })
      .pipe(map(res => res.toString()))
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
        }
      );
  }
}

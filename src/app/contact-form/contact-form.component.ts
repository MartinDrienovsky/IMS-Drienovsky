import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  FormData: FormGroup;
  ModalComponent: any;
  closeResult = '';
  constructor(
    private builder: FormBuilder,
    private httpClient: HttpClient,
    public dialog: MatDialog
  ) {}
/* Defining of contact form parameters */
  ngOnInit(): void {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [
        Validators.compose([Validators.required, Validators.email]),
      ]),
      Comment: new FormControl('', [Validators.required]),
    });
  }
/* On submit click method to send the request to remote server which process it and redirects to my email. */
  onSubmit(FormData) {
    console.log(FormData);
    this.httpClient
      .post('https://formspree.io/f/xvodoabz', FormData)
      .subscribe((result) => {
        console.log(result);
        const dialogRef = this.dialog.open(DialogComponent, {
          width: '50%',
        });
      });
  }
}

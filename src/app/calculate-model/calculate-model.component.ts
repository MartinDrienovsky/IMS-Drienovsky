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

@Component({
  selector: 'app-calculate-model',
  templateUrl: './calculate-model.component.html',
  styleUrls: ['./calculate-model.component.css'],
})
export class CalculateModelComponent implements OnInit {
  FormData: FormGroup;
  ModalComponent: any;
  closeResult = '';
  constructor(
    private builder: FormBuilder,
    private httpClient: HttpClient,
    public dialog: MatDialog
  ) {}

p5: number = 0;
p5a: number = 0;
p6: number = 0;
p6a: number = 0;
p7: number = 0;
p7a: number = 0;
p8: number = 0;
p8a: number = 0;
p9: number = 0;
p9a: number = 0;

u7: number = 0;
u7a: number = 0;
u8: number = 0;
u8a: number = 0;
u9: number = 0;
u9a: number = 0;
u10: number = 0;
u10a: number = 0;
u11: number = 0;
u11a: number = 0;
u12: number = 0;
u12a: number = 0;
u13: number = 0;
u13a: number = 0;
u14: number = 0;
u14a: number = 0;
u15: number = 0;
u15a: number = 0;

submited: boolean = false;

  ngOnInit(): void {
    this.FormData = this.builder.group({
      Odoberania: new FormControl(null, [Validators.required,Validators.pattern("^[0-9]*$")]),
      Zmeny: new FormControl(null, [Validators.required,Validators.pattern("^[0-9]*$")]),
      obnovenia: new FormControl(null, [Validators.required,Validators.pattern("^[0-9]*$")]),
      pocetOdoberania: new FormControl(null, [Validators.required,Validators.pattern("^[0-9]*$")]),
      pozorovatelia: new FormControl(null, [Validators.required,Validators.pattern("^[0-9]*$")]),
    });
  }
  
  onSubmit(FormData) {
    console.log(FormData);
    this.submited = true
    this.p5 = 0
    this.p5a = 0 
    this.p6 = 0 
    this.p6a = 0 
    this.p7 = 0 
    this.p7a = 0 
    this.p8 = 0
    this.p8a = 0 
    this.p9 = 0
    this.p9a = 0

    this.u7 = 0 
    this.u7a = 0 
    this.u8 = 0
    this.u8a = 0 
    this.u9 = 0
    this.u9a = 0
    this.u10 = 0
    this.u10a = 0
    this.u11 = 0
    this.u11a = 0 
    this.u12 = 0
    this.u12a = 0
    this.u13 = 0
    this.u13a = 0
    this.u14 = 0
    this.u14a = 0
    this.u15 = 0
    this.u15a = 0

    this.p5 = this.calculateP5(FormData.pozorovatelia, 4)
    this.p5a = this.calculateP5A(FormData.pozorovatelia, 4, 450)
    this.p6 = this.calculateP6(FormData.pozorovatelia, 4)
    this.p6a = this.calculateP6A(FormData.pozorovatelia, 4, 370)
    this.p7 = this.calculateP7(FormData.pozorovatelia, 4)
    this.p7a = this.calculateP7A( 4, FormData.pozorovatelia, 500, 3000)
    this.p8 = this.calculateP8(FormData.pozorovatelia, 4)
    this.p8a = this.calculateP8A(FormData.pozorovatelia, 4, 370)
    this.p9 = this.calculateP9(this.p5, this.p6, this.p7, this.p8)
    this.p9a = this.calculateP9A(this.p5a, this.p6a, this.p7a, this.p8a)

    this.u7 = this.calculateU7(FormData.pozorovatelia, 22, FormData.pocetOdoberania)
    this.u7a = this.calculateU7A(FormData.pozorovatelia, FormData.pocetOdoberania, 500, 3000, 22)
    this.u8 = this.calculateU8(FormData.pozorovatelia, 22, FormData.pocetOdoberania)
    this.u8a = this.calculateU8A(FormData.pozorovatelia, 22, FormData.pocetOdoberania, 370)
    this.u9 = this.calculateU9(this.u7, this.u8)
    this.u9a = this.calculateU9A(this.u7a, this.u8a)
    this.u10 = this.calculateU10(FormData.pozorovatelia, 28)
    this.u10a = this.calculateU10A(FormData.pozorovatelia, 28, 450)
    this.u11 = this.calculateU11(FormData.pozorovatelia, 28)
    this.u11a = this.calculateU11A(FormData.pozorovatelia, 28, 370)
    this.u12 = this.calculateU12(FormData.pozorovatelia, 28)
    this.u12a = this.calculateU12A(FormData.pozorovatelia, 28, 500, 3000)
    this.u13 = this.calculateU13(FormData.pozorovatelia, 28)
    this.u13a = this.calculateU13A(FormData.pozorovatelia, 28, 370)
    this.u14 = this.calculateU14(this.u10, this.u11, this.u12, this.u13)
    this.u14a = this.calculateU14A(this.u10a, this.u11a, this.u12a, this.u13a)
    this.u15 = this.calculateU15(this.u9, this.u14)
    this.u15a = this.calculateU15A(this.u9a, this.u14a)
  
  }

  calculateP5(number1: number, number2: number) {
      return number1 * number2
  }
  calculateP5A(number1: number, number2: number, number3: number) {
    return number1 * number2 * number3
  }
  calculateP6(number1: number, number2: number) {
    return number1 * number2 
  }
  calculateP6A(number1: number, number2: number, number3: number) {
    return number1 * number2 * number3
  }
  calculateP7(number1: number, number2: number) {
    return number1 * number2 
  }
  calculateP7A(number1: number, number2: number, number3: number, number4: number) {
    return (number1 * number2 * (number3 + number4))
  }
  calculateP8(number1: number, number2: number) {
    return number1 * number2 
  }
  calculateP8A(number1: number, number2: number, number3: number) {
    return number1 * number2 * number3
  }
  calculateP9(number1: number, number2: number, number3: number, number4: number) {
    return number1 + number2 + number3 + number4
  }
  calculateP9A(number1: number, number2: number, number3: number, number4: number) {
    return number1 + number2 + number3 + number4
  }

  calculateU7(number1: number, number2: number, number3: number) {
    return number1 * number2 * number3
  }
  calculateU7A(number1: number, number2: number, number3: number, number4: number, number5: number) {
    return ((number1 * number2) * (number3 + number4) *number5)
  }
  calculateU8(number1: number, number2: number, number3: number) {
    return number1 * number2 * number3
  }
  calculateU8A(number1: number, number2: number, number3: number, number4: number) {
    return number1 * number2 * number3 * number4
  }
  calculateU9(number1: number, number2: number) {
    return number1 + number2 
  }
  calculateU9A(number1: number, number2: number) {
    return number1 + number2 
  }
  calculateU10(number1: number, number2: number) {
    return number1 * number2 
  }
  calculateU10A(number1: number, number2: number, number3: number) {
    return number1 * number2 * number3
  }
  calculateU11(number1: number, number2: number) {
    return number1 * number2 
  }
  calculateU11A(number1: number, number2: number, number3: number) {
    return number1 * number2 * number3
  }
  calculateU12(number1: number, number2: number) {
    return number1 * number2 
  }
  calculateU12A(number1: number, number2: number, number3: number, number4: number) {
    return (number1 * number2 * (number3 + number4))
  }
  calculateU13(number1: number, number2: number) {
    return number1 * number2 
  }
  calculateU13A(number1: number, number2: number, number3: number) {
    return number1 * number2 * number3
  }
  calculateU14(number1: number, number2: number, number3: number, number4: number) {
    return number1 + number2 + number3 + number4
  }
  calculateU14A(number1: number, number2: number, number3: number, number4: number) {
    return number1 + number2 + number3 + number4
  }
  calculateU15(number1: number, number2: number) {
    return number1 + number2 
  }
  calculateU15A(number1: number, number2: number) {
    return number1 + number2 
  }
}
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
cp5a: string
p6: number = 0;
p6a: number = 0;
cp6a: string
p7: number = 0;
p7a: number = 0;
cp7a: string
p8: number = 0;
p8a: number = 0;
cp8a: string
p9: number = 0;
p9a: number = 0;
cp9a: string

u7: number = 0;
u7a: number = 0;
cu7a: string
u8: number = 0;
u8a: number = 0;
cu8a: string
u9: number = 0;
u9a: number = 0;
cu9a: string
u10: number = 0;
u10a: number = 0;
cu10a: string
u11: number = 0;
u11a: number = 0;
cu11a: string
u12: number = 0;
u12a: number = 0;
cu12a: string
u13: number = 0;
u13a: number = 0;
cu13a: string
u14: number = 0;
u14a: number = 0;
cu14a: string
u15: number = 0;
u15a: number = 0;
cu15a: string

z5: number = 0;
z5a: number = 0;
cz5a: string
z6: number = 0;
z6a: number = 0;
cz6a: string
z7: number = 0;
z7a: number = 0;
cz7a: string
z8: number = 0;
z8a: number = 0;
cz8a: string
z9: number = 0;
z9a: number = 0;
cz9a: string

v1: number = 0;
v1a: number = 0;
cv1a: string
v2: number = 0;
v2a: number = 0;
cv2a: string
v3: number = 0;
v3a: number = 0;
cv3a: string

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

    this.z5 = 0
    this.z5a = 0 
    this.z6 = 0 
    this.z6a = 0 
    this.z7 = 0 
    this.z7a = 0 
    this.z8 = 0
    this.z8a = 0 
    this.z9 = 0
    this.z9a = 0

    this.v1 = 0
    this.v1a = 0 
    this.v2 = 0 
    this.v2a = 0 
    this.v3 = 0 
    this.v3a = 0 

    this.p5 = this.calculateP5(FormData.pozorovatelia, 4)
    this.p5a = this.calculateP5A(FormData.pozorovatelia, 4, 450)
    this.cp5a = this.bytesToStringSize(this.p5a);
    this.p6 = this.calculateP6(FormData.pozorovatelia, 4)
    this.p6a = this.calculateP6A(FormData.pozorovatelia, 4, 370)
    this.cp6a = this.bytesToStringSize(this.p6a);
    this.p7 = this.calculateP7(FormData.pozorovatelia, 4)
    this.p7a = this.calculateP7A( 4, FormData.pozorovatelia, 500, 3000)
    this.cp7a = this.bytesToStringSize(this.p7a);
    this.p8 = this.calculateP8(FormData.pozorovatelia, 4)
    this.p8a = this.calculateP8A(FormData.pozorovatelia, 4, 370)
    this.cp8a = this.bytesToStringSize(this.p8a);
    this.p9 = this.calculateP9(this.p5, this.p6, this.p7, this.p8)
    this.p9a = this.calculateP9A(this.p5a, this.p6a, this.p7a, this.p8a)
    this.cp9a = this.bytesToStringSize(this.p9a);

    this.u7 = this.calculateU7(FormData.pozorovatelia, 22, FormData.pocetOdoberania)
    this.u7a = this.calculateU7A(FormData.pozorovatelia, FormData.pocetOdoberania, 500, 3000, 22)
    this.cu7a = this.bytesToStringSize(this.u7a);
    this.u8 = this.calculateU8(FormData.pozorovatelia, 22, FormData.pocetOdoberania)
    this.u8a = this.calculateU8A(FormData.pozorovatelia, 22, FormData.pocetOdoberania, 370)
    this.cu8a = this.bytesToStringSize(this.u8a);
    this.u9 = this.calculateU9(this.u7, this.u8)
    this.u9a = this.calculateU9A(this.u7a, this.u8a)
    this.cu9a = this.bytesToStringSize(this.u9a);
    this.u10 = this.calculateU10(FormData.pozorovatelia, 28)
    this.u10a = this.calculateU10A(FormData.pozorovatelia, 28, 450)
    this.cu10a = this.bytesToStringSize(this.u10a);
    this.u11 = this.calculateU11(FormData.pozorovatelia, 28)
    this.u11a = this.calculateU11A(FormData.pozorovatelia, 28, 370)
    this.cu11a = this.bytesToStringSize(this.u11a);
    this.u12 = this.calculateU12(FormData.pozorovatelia, 28)
    this.u12a = this.calculateU12A(FormData.pozorovatelia, 28, 500, 3000)
    this.cu12a = this.bytesToStringSize(this.u12a);
    this.u13 = this.calculateU13(FormData.pozorovatelia, 28)
    this.u13a = this.calculateU13A(FormData.pozorovatelia, 28, 370)
    this.cu13a = this.bytesToStringSize(this.u13a);
    this.u14 = this.calculateU14(this.u10, this.u11, this.u12, this.u13)
    this.u14a = this.calculateU14A(this.u10a, this.u11a, this.u12a, this.u13a)
    this.cu14a = this.bytesToStringSize(this.u14a);
    this.u15 = this.calculateU15(this.u9, this.u14)
    this.u15a = this.calculateU15A(this.u9a, this.u14a)
    this.cu15a = this.bytesToStringSize(this.u15a);

    this.z5 = this.calculateP5(FormData.pozorovatelia, 4)
    this.z5a = this.calculateP5A(FormData.pozorovatelia, 4, 450)
    this.cz5a = this.bytesToStringSize(this.z5a);
    this.z6 = this.calculateP6(FormData.pozorovatelia, 4)
    this.z6a = this.calculateP6A(FormData.pozorovatelia, 4, 370)
    this.cz6a = this.bytesToStringSize(this.z6a);
    this.z7 = this.calculateP7(FormData.pozorovatelia, 4)
    this.z7a = this.calculateP7A( 4, FormData.pozorovatelia, 500, 3000)
    this.cz7a = this.bytesToStringSize(this.z7a);
    this.z8 = this.calculateP8(FormData.pozorovatelia, 4)
    this.z8a = this.calculateP8A(FormData.pozorovatelia, 4, 370)
    this.cz8a = this.bytesToStringSize(this.z8a);
    this.z9 = this.calculateP9(this.z5, this.z6, this.z7, this.z8)
    this.z9a = this.calculateP9A(this.z5a, this.z6a, this.z7a, this.z8a)
    this.cz9a = this.bytesToStringSize(this.z9a);

    this.v1 = this.calculateV1(this.p9, this.u15, this.z9)
    this.v1a = this.calculateV1A(this.p9a, this.u15a, this.z9a)
    this.cv1a = this.bytesToStringSize(this.v1a);
    this.v2 = this.calculateV2(this.v1, 60, 60, FormData.Odoberania)
    this.v2a = this.calculateV2A(this.v1a, 60, 60, FormData.Odoberania)
    this.cv2a = this.bytesToStringSize(this.v2a);
    this.v3 = this.calculateV3(this.v1, FormData.pozorovatelia)
    this.v3a = this.calculateV3A(this.v1a, FormData.pozorovatelia)
    this.cv3a = this.bytesToStringSize(this.v3a);
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

  calculateV1(number1: number, number2: number, number3: number) {
    return number1 + number2 + number3
  }
  calculateV1A(number1: number, number2: number, number3: number) {
    return number1 + number2 + number3
  }
  calculateV2(number1: number, number2: number, number3: number, number4: number) {
    return Math.floor(number1 / (number2 * number3 * number4))
  }
  calculateV2A(number1: number, number2: number, number3: number, number4: number) {
    return (number1 / (number2 * number3 * number4))
  }
  calculateV3(number1: number, number2: number) {
    return (number1 / number2 )
  }
  calculateV3A(number1: number, number2: number) {
    return (number1 / number2)
  }

  bytesToStringSize(bytes: number): string {
    if (bytes < 1024) {
      return `${bytes} B`;
    } else if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(2)} KB`;
    } else if (bytes < 1024 * 1024 * 1024) {
      return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    } else if (bytes < 1024 * 1024 * 1024 * 1024) {
      return `${(bytes / (1024 * 1024* 1024)).toFixed(2)} GB`;
    } else {
      return `${(bytes / (1024 * 1024 * 1024 * 1024)).toFixed(2)} TB`;
    }
  };
}
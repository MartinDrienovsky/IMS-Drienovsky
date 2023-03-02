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
// Non optimized
// p- pociatocne, a - velkost, c - converted na spravne jednotky, u - ustalene, z - zaverecne, v - vysledne
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

// Dialog optimized
// d - optimalizacia dialog

dp5: number = 0;
dp5a: number = 0;
dcp5a: string
dp6: number = 0;
dp6a: number = 0;
dcp6a: string
dp7: number = 0;
dp7a: number = 0;
dcp7a: string
dp8: number = 0;
dp8a: number = 0;
dcp8a: string
dp9: number = 0;
dp9a: number = 0;
dcp9a: string

du7: number = 0;
du7a: number = 0;
dcu7a: string
du8: number = 0;
du8a: number = 0;
dcu8a: string
du9: number = 0;
du9a: number = 0;
dcu9a: string
du10: number = 0;
du10a: number = 0;
dcu10a: string
du11: number = 0;
du11a: number = 0;
dcu11a: string
du12: number = 0;
du12a: number = 0;
dcu12a: string
du13: number = 0;
du13a: number = 0;
dcu13a: string
du14: number = 0;
du14a: number = 0;
dcu14a: string
du15: number = 0;
du15a: number = 0;
dcu15a: string

dz5: number = 0;
dz5a: number = 0;
dcz5a: string
dz6: number = 0;
dz6a: number = 0;
dcz6a: string
dz7: number = 0;
dz7a: number = 0;
dcz7a: string
dz8: number = 0;
dz8a: number = 0;
dcz8a: string
dz9: number = 0;
dz9a: number = 0;
dcz9a: string

dv1: number = 0;
dv1a: number = 0;
dcv1a: string
dv2: number = 0;
dv2a: number = 0;
dcv2a: string
dv3: number = 0;
dv3a: number = 0;
dcv3a: string

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

    // Non Optimized
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

    // Dialog optimized
    this.dp5 = 0
    this.dp5a = 0 
    this.dp6 = 0 
    this.dp6a = 0 
    this.dp7 = 0 
    this.dp7a = 0 
    this.dp8 = 0
    this.dp8a = 0 
    this.dp9 = 0
    this.dp9a = 0

    this.du7 = 0 
    this.du7a = 0 
    this.du8 = 0
    this.du8a = 0 
    this.du9 = 0
    this.du9a = 0
    this.du10 = 0
    this.du10a = 0
    this.du11 = 0
    this.du11a = 0 
    this.du12 = 0
    this.du12a = 0
    this.du13 = 0
    this.du13a = 0
    this.du14 = 0
    this.du14a = 0
    this.du15 = 0
    this.du15a = 0

    this.dz5 = 0
    this.dz5a = 0 
    this.dz6 = 0 
    this.dz6a = 0 
    this.dz7 = 0 
    this.dz7a = 0 
    this.dz8 = 0
    this.dz8a = 0 
    this.dz9 = 0
    this.dz9a = 0

    this.dv1 = 0
    this.dv1a = 0 
    this.dv2 = 0 
    this.dv2a = 0 
    this.dv3 = 0 
    this.dv3a = 0

    
    // Non optimized
    this.p5 = this.calculateP5(FormData.pozorovatelia, FormData.pocetOdoberania)
    this.p5a = this.calculateP5A(FormData.pozorovatelia, FormData.pocetOdoberania, 450)
    this.cp5a = this.bytesToStringSize(this.p5a);
    this.p6 = this.calculateP6(FormData.pozorovatelia, FormData.pocetOdoberania)
    this.p6a = this.calculateP6A(FormData.pozorovatelia, FormData.pocetOdoberania, 370)
    this.cp6a = this.bytesToStringSize(this.p6a);
    this.p7 = this.calculateP7(FormData.pozorovatelia, FormData.pocetOdoberania)
    this.p7a = this.calculateP7A(FormData.pocetOdoberania, FormData.pozorovatelia, 500, 3000)
    this.cp7a = this.bytesToStringSize(this.p7a);
    this.p8 = this.calculateP8(FormData.pozorovatelia, FormData.pocetOdoberania)
    this.p8a = this.calculateP8A(FormData.pozorovatelia, FormData.pocetOdoberania, 370)
    this.cp8a = this.bytesToStringSize(this.p8a);
    this.p9 = this.calculateP9(this.p5, this.p6, this.p7, this.p8)
    this.p9a = this.calculateP9A(this.p5a, this.p6a, this.p7a, this.p8a)
    this.cp9a = this.bytesToStringSize(this.p9a);

    this.u7 = this.calculateU7(FormData.pozorovatelia, FormData.Odoberania, FormData.Zmeny, FormData.pocetOdoberania)
    this.u7a = this.calculateU7A(FormData.pozorovatelia, FormData.pocetOdoberania, 500, 3000, FormData.Odoberania, FormData.Zmeny)
    this.cu7a = this.bytesToStringSize(this.u7a);
    this.u8 = this.calculateU8(FormData.pozorovatelia, FormData.Odoberania, FormData.Zmeny, FormData.pocetOdoberania)
    this.u8a = this.calculateU8A(FormData.pozorovatelia, FormData.Odoberania, FormData.Zmeny, FormData.pocetOdoberania, 370)
    this.cu8a = this.bytesToStringSize(this.u8a);
    this.u9 = this.calculateU9(this.u7, this.u8)
    this.u9a = this.calculateU9A(this.u7a, this.u8a)
    this.cu9a = this.bytesToStringSize(this.u9a);
    this.u10 = this.calculateU10(FormData.pozorovatelia, FormData.Odoberania, FormData.obnovenia, FormData.pocetOdoberania)
    this.u10a = this.calculateU10A(FormData.pozorovatelia, FormData.Odoberania, FormData.obnovenia, FormData.pocetOdoberania, 450)
    this.cu10a = this.bytesToStringSize(this.u10a);
    this.u11 = this.calculateU11(FormData.pozorovatelia, FormData.Odoberania, FormData.obnovenia, FormData.pocetOdoberania)
    this.u11a = this.calculateU11A(FormData.pozorovatelia, FormData.Odoberania, FormData.obnovenia, FormData.pocetOdoberania, 370)
    this.cu11a = this.bytesToStringSize(this.u11a);
    this.u12 = this.calculateU12(FormData.pozorovatelia, FormData.Odoberania, FormData.obnovenia, FormData.pocetOdoberania)
    this.u12a = this.calculateU12A(FormData.pozorovatelia, FormData.Odoberania, FormData.obnovenia, FormData.pocetOdoberania, 500, 3000)
    this.cu12a = this.bytesToStringSize(this.u12a);
    this.u13 = this.calculateU13(FormData.pozorovatelia, FormData.Odoberania, FormData.obnovenia, FormData.pocetOdoberania)
    this.u13a = this.calculateU13A(FormData.pozorovatelia, FormData.Odoberania, FormData.obnovenia, FormData.pocetOdoberania, 370)
    this.cu13a = this.bytesToStringSize(this.u13a);
    this.u14 = this.calculateU14(this.u10, this.u11, this.u12, this.u13)
    this.u14a = this.calculateU14A(this.u10a, this.u11a, this.u12a, this.u13a)
    this.cu14a = this.bytesToStringSize(this.u14a);
    this.u15 = this.calculateU15(this.u9, this.u14)
    this.u15a = this.calculateU15A(this.u9a, this.u14a)
    this.cu15a = this.bytesToStringSize(this.u15a);

    this.z5 = this.calculateP5(FormData.pozorovatelia, FormData.pocetOdoberania)
    this.z5a = this.calculateP5A(FormData.pozorovatelia, FormData.pocetOdoberania, 450)
    this.cz5a = this.bytesToStringSize(this.z5a);
    this.z6 = this.calculateP6(FormData.pozorovatelia, FormData.pocetOdoberania)
    this.z6a = this.calculateP6A(FormData.pozorovatelia, FormData.pocetOdoberania, 370)
    this.cz6a = this.bytesToStringSize(this.z6a);
    this.z7 = this.calculateP7(FormData.pozorovatelia, FormData.pocetOdoberania)
    this.z7a = this.calculateP7A( FormData.pocetOdoberania, FormData.pozorovatelia, 500, 3000)
    this.cz7a = this.bytesToStringSize(this.z7a);
    this.z8 = this.calculateP8(FormData.pozorovatelia, FormData.pocetOdoberania)
    this.z8a = this.calculateP8A(FormData.pozorovatelia, FormData.pocetOdoberania, 370)
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

    // Dialog optimized
    this.dp5 = this.calculateDP5(FormData.pozorovatelia, 1)
    this.dp5a = this.calculateDP5A(FormData.pozorovatelia, 1, 450)
    this.dcp5a = this.bytesToStringSize(this.dp5a);
    this.dp6 = this.calculateDP6(FormData.pozorovatelia, 1)
    this.dp6a = this.calculateDP6A(FormData.pozorovatelia, 1, 370)
    this.dcp6a = this.bytesToStringSize(this.dp6a);
    this.dp7 = this.calculateDP7(FormData.pozorovatelia, 1)
    this.dp7a = this.calculateDP7A(1, FormData.pozorovatelia, 500, 3000, FormData.pocetOdoberania)
    this.dcp7a = this.bytesToStringSize(this.dp7a);
    this.dp8 = this.calculateDP8(FormData.pozorovatelia, 1)
    this.dp8a = this.calculateDP8A(FormData.pozorovatelia, 1, 370)
    this.dcp8a = this.bytesToStringSize(this.dp8a);
    this.dp9 = this.calculateDP9(this.dp5, this.dp6, this.dp7, this.dp8)
    this.dp9a = this.calculateDP9A(this.dp5a, this.dp6a, this.dp7a, this.dp8a)
    this.dcp9a = this.bytesToStringSize(this.dp9a);

    this.du7 = this.calculateDU7(FormData.pozorovatelia, FormData.Odoberania, FormData.Zmeny, FormData.pocetOdoberania)
    this.du7a = this.calculateDU7A(FormData.pozorovatelia, FormData.pocetOdoberania, 500, 3000, FormData.Odoberania, FormData.Zmeny)
    this.dcu7a = this.bytesToStringSize(this.du7a);
    this.du8 = this.calculateDU8(FormData.pozorovatelia, FormData.Odoberania, FormData.Zmeny, FormData.pocetOdoberania)
    this.du8a = this.calculateDU8A(FormData.pozorovatelia, FormData.Odoberania, FormData.Zmeny, FormData.pocetOdoberania, 370)
    this.dcu8a = this.bytesToStringSize(this.du8a);
    this.du9 = this.calculateDU9(this.du7, this.du8)
    this.du9a = this.calculateDU9A(this.du7a, this.du8a)
    this.dcu9a = this.bytesToStringSize(this.du9a);
    this.du10 = this.calculateDU10(FormData.pozorovatelia, FormData.Odoberania, FormData.obnovenia, 1)
    this.du10a = this.calculateDU10A(FormData.pozorovatelia, FormData.Odoberania, FormData.obnovenia, 1, 450)
    this.dcu10a = this.bytesToStringSize(this.du10a);
    this.du11 = this.calculateDU11(FormData.pozorovatelia, FormData.Odoberania, FormData.obnovenia, 1)
    this.du11a = this.calculateDU11A(FormData.pozorovatelia, FormData.Odoberania, FormData.obnovenia, 1, 370)
    this.dcu11a = this.bytesToStringSize(this.du11a);
    this.du12 = this.calculateDU12(FormData.pozorovatelia, FormData.Odoberania, FormData.obnovenia, 1)
    this.du12a = this.calculateDU12A(FormData.pozorovatelia, FormData.Odoberania, FormData.obnovenia, FormData.pocetOdoberania, 500, 3000)
    this.dcu12a = this.bytesToStringSize(this.du12a);
    this.du13 = this.calculateDU13(FormData.pozorovatelia, FormData.Odoberania, FormData.obnovenia, 1)
    this.du13a = this.calculateDU13A(FormData.pozorovatelia, FormData.Odoberania, FormData.obnovenia, FormData.pocetOdoberania, 370)
    this.dcu13a = this.bytesToStringSize(this.du13a);
    this.du14 = this.calculateDU14(this.du10, this.du11, this.du12, this.du13)
    this.du14a = this.calculateDU14A(this.du10a, this.du11a, this.du12a, this.du13a)
    this.dcu14a = this.bytesToStringSize(this.du14a);
    this.du15 = this.calculateDU15(this.du9, this.du14)
    this.du15a = this.calculateDU15A(this.du9a, this.du14a)
    this.dcu15a = this.bytesToStringSize(this.du15a);

    this.dz5 = this.calculateDP5(FormData.pozorovatelia, 1)
    this.dz5a = this.calculateDP5A(FormData.pozorovatelia, 1, 450)
    this.dcz5a = this.bytesToStringSize(this.dz5a);
    this.dz6 = this.calculateDP6(FormData.pozorovatelia, 1)
    this.dz6a = this.calculateDP6A(FormData.pozorovatelia, 1, 370)
    this.dcz6a = this.bytesToStringSize(this.dz6a);
    this.dz7 = this.calculateDP7(FormData.pozorovatelia, 1)
    this.dz7a = this.calculateDP7A(1, FormData.pozorovatelia, 500, 3000, FormData.pocetOdoberania)
    this.dcz7a = this.bytesToStringSize(this.dz7a);
    this.dz8 = this.calculateDP8(FormData.pozorovatelia, 1)
    this.dz8a = this.calculateDP8A(FormData.pozorovatelia, 1, 370)
    this.dcz8a = this.bytesToStringSize(this.dz8a);
    this.dz9 = this.calculateDP9(this.dz5, this.dz6, this.dz7, this.dz8)
    this.dz9a = this.calculateDP9A(this.dz5a, this.dz6a, this.dz7a, this.dz8a)
    this.dcz9a = this.bytesToStringSize(this.dz9a);

    this.dv1 = this.calculateDV1(this.dp9, this.du15, this.dz9)
    this.dv1a = this.calculateDV1A(this.dp9a, this.du15a, this.dz9a)
    this.dcv1a = this.bytesToStringSize(this.dv1a);
    this.dv2 = this.calculateDV2(this.dv1, 60, 60, FormData.Odoberania)
    this.dv2a = this.calculateDV2A(this.dv1a, 60, 60, FormData.Odoberania)
    this.dcv2a = this.bytesToStringSize(this.dv2a);
    this.dv3 = this.calculateDV3(this.dv1, FormData.pozorovatelia)
    this.dv3a = this.calculateDV3A(this.dv1a, FormData.pozorovatelia)
    this.dcv3a = this.bytesToStringSize(this.dv3a);

  }
//Non optimized
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

  calculateU7(number1: number, number2: number, number3: number, number4: number) {
    return (number1 * (number2 * number3 -2) * number4)
  }
  calculateU7A(number1: number, number2: number, number3: number, number4: number, number5: number, number6: number) {
    return ((number1 * number2) * (number3 + number4) * (number5 * number6 -2))
  }
  calculateU8(number1: number, number2: number, number3: number, number4: number) {
    return number1 * (number2 * number3 -2) * number4
  }
  calculateU8A(number1: number, number2: number, number3: number, number4: number, number5: number) {
    return number1 * (number2 * number3 -2) * number4 * number5
  }
  calculateU9(number1: number, number2: number) {
    return number1 + number2 
  }
  calculateU9A(number1: number, number2: number) {
    return number1 + number2 
  }
  calculateU10(number1: number, number2: number, number3: number, number4: number) {
    return (((number2/number3)-1) * number4) * number1
  }
  calculateU10A(number1: number, number2: number, number3: number, number4: number, number5: number) {
    return number1 * (((number2/number3)-1) * number4) * number5
  }
  calculateU11(number1: number, number2: number, number3: number, number4: number) {
    return number1 * (((number2/number3)-1) * number4)
  }
  calculateU11A(number1: number, number2: number, number3: number, number4: number, number5: number) {
    return number1 * (((number2/number3)-1) * number4) * number5
  }
  calculateU12(number1: number, number2: number, number3: number, number4: number) {
    return number1 * (((number2/number3)-1) * number4) 
  }
  calculateU12A(number1: number, number2: number, number3: number, number4: number, number5: number, number6: number) {
    return (number1 * (((number2/number3)-1) * number4) * (number5 + number6))
  }
  calculateU13(number1: number, number2: number, number3: number, number4: number) {
    return number1 * (((number2/number3)-1) * number4)
  }
  calculateU13A(number1: number, number2: number, number3: number, number4: number, number5: number) {
    return number1 * (((number2/number3)-1) * number4) * number5
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

  // Dialog optimized
  calculateDP5(number1: number, number2: number) {
    return number1 * number2
  }
  calculateDP5A(number1: number, number2: number, number3: number) {
    return number1 * number2 * number3
  }
  calculateDP6(number1: number, number2: number) {
    return number1 * number2 
  }
  calculateDP6A(number1: number, number2: number, number3: number) {
    return number1 * number2 * number3
  }
  calculateDP7(number1: number, number2: number) {
    return number1 * number2 
  }
  calculateDP7A(number1: number, number2: number, number3: number, number4: number, number5: number) {
    return ((number1 * number2 * (number3 + 144 + 144))+(number1 * number2 * number5 * (number4 + 160 + 144)))
  }
  calculateDP8(number1: number, number2: number) {
    return number1 * number2 
  }
  calculateDP8A(number1: number, number2: number, number3: number) {
    return number1 * number2 * number3
  }
  calculateDP9(number1: number, number2: number, number3: number, number4: number) {
    return number1 + number2 + number3 + number4
  }
  calculateDP9A(number1: number, number2: number, number3: number, number4: number) {
    return number1 + number2 + number3 + number4
  }

  calculateDU7(number1: number, number2: number, number3: number, number4: number) {
    return (number1 * (number2 * number3 -2) * number4)
  }
  calculateDU7A(number1: number, number2: number, number3: number, number4: number, number5: number, number6: number) {
    return ((number1 * number2) * ((number3 + number4 + 144 + 144 + 160 + 144) * (number5 * number6 -2)))
  }
  calculateDU8(number1: number, number2: number, number3: number, number4: number) {
    return number1 * (number2 * number3 -2) * number4
  }
  calculateDU8A(number1: number, number2: number, number3: number, number4: number, number5: number) {
    return (number1 * number4) * (number2 * number3 -2) * number5
  }
  calculateDU9(number1: number, number2: number) {
    return number1 + number2 
  }
  calculateDU9A(number1: number, number2: number) {
    return number1 + number2 
  }
  calculateDU10(number1: number, number2: number, number3: number, number4: number) {
    return (((number2/number3)-1) * number4) * number1
  }
  calculateDU10A(number1: number, number2: number, number3: number, number4: number, number5: number) {
    return number1 * (((number2/number3)-1) * number4) * number5
  }
  calculateDU11(number1: number, number2: number, number3: number, number4: number) {
    return number1 * (((number2/number3)-1) * number4)
  }
  calculateDU11A(number1: number, number2: number, number3: number, number4: number, number5: number) {
    return number1 * (((number2/number3)-1) * number4) * number5
  }
  calculateDU12(number1: number, number2: number, number3: number, number4: number) {
    return number1 * (((number2/number3)-1) * number4) 
  }
  calculateDU12A(number1: number, number2: number, number3: number, number4: number, number5: number, number6: number) {
    return (number1 * ((((number2/number3)-1)) * ((number5 + 144 + 144) + (number4 * (number6 + 160 + 144)))))
  }
  calculateDU13(number1: number, number2: number, number3: number, number4: number) {
    return number1 * (((number2/number3)-1) * number4)
  }
  calculateDU13A(number1: number, number2: number, number3: number, number4: number, number5: number) {
    return number1 * (((number2/number3)-1) * number4) * number5
  }
  calculateDU14(number1: number, number2: number, number3: number, number4: number) {
    return number1 + number2 + number3 + number4
  }
  calculateDU14A(number1: number, number2: number, number3: number, number4: number) {
    return number1 + number2 + number3 + number4
  }
  calculateDU15(number1: number, number2: number) {
    return number1 + number2 
  }
  calculateDU15A(number1: number, number2: number) {
    return number1 + number2 
  }

  calculateDV1(number1: number, number2: number, number3: number) {
    return number1 + number2 + number3
  }
  calculateDV1A(number1: number, number2: number, number3: number) {
    return number1 + number2 + number3
  }
  calculateDV2(number1: number, number2: number, number3: number, number4: number) {
    return Math.floor(number1 / (number2 * number3 * number4))
  }
  calculateDV2A(number1: number, number2: number, number3: number, number4: number) {
    return (number1 / (number2 * number3 * number4))
  }
  calculateDV3(number1: number, number2: number) {
    return (number1 / number2 )
  }
  calculateDV3A(number1: number, number2: number) {
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
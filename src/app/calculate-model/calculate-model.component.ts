import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import {
  MatLegacyDialog as MatDialog,
} from '@angular/material/legacy-dialog';

enum GraphType {
  USER_DATA,
  POZOROVATELIA_100,
  POZOROVATELIA_1000,
}

@Component({
  selector: 'app-calculate-model',
  templateUrl: './calculate-model.component.html',
  styleUrls: ['./calculate-model.component.css']
})


export class CalculateModelComponent implements OnInit {
  FormData: UntypedFormGroup;
  ModalComponent: any;
  closeResult = '';
  percentageDifference: number;
  percentageDifference1: number;
  percentageDifference2: number;
  percentageDifference3: number;
  percentageDifference4: number;
  percentageDifference5: number;
  percentageDifference6: number;
  percentageDifference7: number;
  constructor(
    private builder: UntypedFormBuilder,
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

// Notify optimized
// n - optimalizacia notify

nu12: number = 0;
nu12a: number = 0;
ncu12a: string
nu13: number = 0;
nu13a: number = 0;
ncu13a: string
nu14: number = 0;
nu14a: number = 0;
ncu14a: string
nu15: number = 0;
nu15a: number = 0;
ncu15a: string


nz7: number = 0;
nz7a: number = 0;
ncz7a: string
nz8: number = 0;
nz8a: number = 0;
ncz8a: string
nz9: number = 0;
nz9a: number = 0;
ncz9a: string

nv1: number = 0;
nv1a: number = 0;
ncv1a: string
nv2: number = 0;
nv2a: number = 0;
ncv2a: string
nv3: number = 0;
nv3a: number = 0;
ncv3a: string

// Partial Notify optimized
// p - optimalizacia notify

pu7: number = 0;
pu7a: number = 0;
pcu7a: string
pu8: number = 0;
pu8a: number = 0;
pcu8a: string
pu9: number = 0;
pu9a: number = 0;
pcu9a: string
pu10: number = 0;
pu10a: number = 0;
pcu10a: string
pu11: number = 0;
pu11a: number = 0;
pcu11a: string
pu12: number = 0;
pu12a: number = 0;
pcu12a: string
pu13: number = 0;
pu13a: number = 0;
pcu13a: string
pu14: number = 0;
pu14a: number = 0;
pcu14a: string
pu15: number = 0;
pu15a: number = 0;
pcu15a: string

pz7: number = 0;
pz7a: number = 0;
pcz7a: string
pz8: number = 0;
pz8a: number = 0;
pcz8a: string
pz9: number = 0;
pz9a: number = 0;
pcz9a: string

pv1: number = 0;
pv1a: number = 0;
pcv1a: string
pv2: number = 0;
pv2a: number = 0;
pcv2a: string
pv3: number = 0;
pv3a: number = 0;
pcv3a: string

// Combination of all optimized
// b - best optimalization

bu7: number = 0;
bu7a: number = 0;
bcu7a: string
bu8: number = 0;
bu8a: number = 0;
bcu8a: string
bu9: number = 0;
bu9a: number = 0;
bcu9a: string
bu10: number = 0;
bu10a: number = 0;
bcu10a: string
bu11: number = 0;
bu11a: number = 0;
bcu11a: string
bu12: number = 0;
bu12a: number = 0;
bcu12a: string
bu13: number = 0;
bu13a: number = 0;
bcu13a: string
bu14: number = 0;
bu14a: number = 0;
bcu14a: string
bu15: number = 0;
bu15a: number = 0;
bcu15a: string

bz7: number = 0;
bz7a: number = 0;
bcz7a: string
bz8: number = 0;
bz8a: number = 0;
bcz8a: string
bz9: number = 0;
bz9a: number = 0;
bcz9a: string

bv1: number = 0;
bv1a: number = 0;
bcv1a: string
bv2: number = 0;
bv2a: number = 0;
bcv2a: string
bv3: number = 0;
bv3a: number = 0;
bcv3a: string


submited: boolean = false;

  ngOnInit(): void {
    this.FormData = this.builder.group({
      odoberania: new UntypedFormControl(null, [Validators.required,Validators.pattern("^[0-9]*$")]),
      zmeny: new UntypedFormControl(null, [Validators.required,Validators.pattern("^[0-9]*$")]),
      obnovenia: new UntypedFormControl(null, [Validators.required,Validators.pattern("^[0-9]*$")]),
      pocetOdoberania: new UntypedFormControl(null, [Validators.required,Validators.pattern("^[0-9]*$")]),
      pozorovatelia: new UntypedFormControl(null, [Validators.required,Validators.pattern("^[0-9]*$")]),
    });
  }


  onSubmit(FormData) {
    console.log(FormData);

    this.submited = true

    let odoberania = FormData.odoberania
    let zmeny = FormData.zmeny
    let obnovenia = FormData.obnovenia
    let pocetOdoberania = FormData.pocetOdoberania
    let pozorovatelia = FormData.pozorovatelia


    this.calculateValues(odoberania, zmeny, obnovenia, pocetOdoberania, pozorovatelia, GraphType.USER_DATA)
  }

  calculateValues(odoberania: number, zmeny: number, obnovenia: number, pocetOdoberania: number, pozorovatelia: number, graphType: GraphType){

    // Get references to the navigation links
const baseServ = document.getElementById('baseServ') as HTMLAnchorElement;
const dialogServ = document.getElementById('dialogServ') as HTMLAnchorElement;
const notifyServ = document.getElementById('notifyServ') as HTMLAnchorElement;
const partialServ = document.getElementById('partialServ') as HTMLAnchorElement;
const combinationServ = document.getElementById('combinationServ') as HTMLAnchorElement;

// Get references to the hidden HTML fields
const home = document.getElementById('home') as HTMLElement;
const about = document.getElementById('about') as HTMLElement;
const services = document.getElementById('services') as HTMLElement;
const contact = document.getElementById('contact') as HTMLElement;
const contacts = document.getElementById('contact') as HTMLElement;

// Add event listeners to the navigation links
baseServ.addEventListener('click', () => {
  home.style.display = 'block';
  about.style.display = 'none';
  services.style.display = 'none';
  contact.style.display = 'none';
});

dialogServ.addEventListener('click', () => {
  home.style.display = 'none';
  about.style.display = 'block';
  services.style.display = 'none';
  contact.style.display = 'none';
});

notifyServ.addEventListener('click', () => {
  home.style.display = 'none';
  about.style.display = 'none';
  services.style.display = 'block';
  contact.style.display = 'none';
});

partialServ.addEventListener('click', () => {
  home.style.display = 'none';
  about.style.display = 'none';
  services.style.display = 'none';
  contact.style.display = 'block';
});

combinationServ.addEventListener('click', () => {
  home.style.display = 'none';
  about.style.display = 'none';
  services.style.display = 'none';
  contact.style.display = 'block';
});
    // Non optimized
    this.p5 = this.calculateP5(pozorovatelia, pocetOdoberania)
    this.p5a = this.calculateP5A(pozorovatelia, pocetOdoberania, 450)
    this.cp5a = this.bytesToStringSize(this.p5a);
    this.p6 = this.calculateP6(pozorovatelia, pocetOdoberania)
    this.p6a = this.calculateP6A(pozorovatelia, pocetOdoberania, 370)
    this.cp6a = this.bytesToStringSize(this.p6a);
    this.p7 = this.calculateP7(pozorovatelia, pocetOdoberania)
    this.p7a = this.calculateP7A(pocetOdoberania, pozorovatelia, 500, 3000)
    this.cp7a = this.bytesToStringSize(this.p7a);
    this.p8 = this.calculateP8(pozorovatelia, pocetOdoberania)
    this.p8a = this.calculateP8A(pozorovatelia, pocetOdoberania, 370)
    this.cp8a = this.bytesToStringSize(this.p8a);
    this.p9 = this.calculateP9(this.p5, this.p6, this.p7, this.p8)
    this.p9a = this.calculateP9A(this.p5a, this.p6a, this.p7a, this.p8a)
    this.cp9a = this.bytesToStringSize(this.p9a);

    this.u7 = this.calculateU7(pozorovatelia, odoberania, zmeny, pocetOdoberania)
    this.u7a = this.calculateU7A(pozorovatelia, pocetOdoberania, 500, 3000, odoberania, zmeny)
    this.cu7a = this.bytesToStringSize(this.u7a);
    this.u8 = this.calculateU8(pozorovatelia, odoberania, zmeny, pocetOdoberania)
    this.u8a = this.calculateU8A(pozorovatelia, odoberania, zmeny, pocetOdoberania, 370)
    this.cu8a = this.bytesToStringSize(this.u8a);
    this.u9 = this.calculateU9(this.u7, this.u8)
    this.u9a = this.calculateU9A(this.u7a, this.u8a)
    this.cu9a = this.bytesToStringSize(this.u9a);
    this.u10 = this.calculateU10(pozorovatelia, odoberania, obnovenia, pocetOdoberania)
    this.u10a = this.calculateU10A(pozorovatelia, odoberania, obnovenia, pocetOdoberania, 450)
    this.cu10a = this.bytesToStringSize(this.u10a);
    this.u11 = this.calculateU11(pozorovatelia, odoberania, obnovenia, pocetOdoberania)
    this.u11a = this.calculateU11A(pozorovatelia, odoberania, obnovenia, pocetOdoberania, 370)
    this.cu11a = this.bytesToStringSize(this.u11a);
    this.u12 = this.calculateU12(pozorovatelia, odoberania, obnovenia, pocetOdoberania)
    this.u12a = this.calculateU12A(pozorovatelia, odoberania, obnovenia, pocetOdoberania, 500, 3000)
    this.cu12a = this.bytesToStringSize(this.u12a);
    this.u13 = this.calculateU13(pozorovatelia, odoberania, obnovenia, pocetOdoberania)
    this.u13a = this.calculateU13A(pozorovatelia, odoberania, obnovenia, pocetOdoberania, 370)
    this.cu13a = this.bytesToStringSize(this.u13a);
    this.u14 = this.calculateU14(this.u10, this.u11, this.u12, this.u13)
    this.u14a = this.calculateU14A(this.u10a, this.u11a, this.u12a, this.u13a)
    this.cu14a = this.bytesToStringSize(this.u14a);
    this.u15 = this.calculateU15(this.u9, this.u14)
    this.u15a = this.calculateU15A(this.u9a, this.u14a)
    this.cu15a = this.bytesToStringSize(this.u15a);

    this.z5 = this.calculateP5(pozorovatelia, pocetOdoberania)
    this.z5a = this.calculateP5A(pozorovatelia, pocetOdoberania, 450)
    this.cz5a = this.bytesToStringSize(this.z5a);
    this.z6 = this.calculateP6(pozorovatelia, pocetOdoberania)
    this.z6a = this.calculateP6A(pozorovatelia, pocetOdoberania, 370)
    this.cz6a = this.bytesToStringSize(this.z6a);
    this.z7 = this.calculateP7(pozorovatelia, pocetOdoberania)
    this.z7a = this.calculateP7A( pocetOdoberania, pozorovatelia, 500, 3000)
    this.cz7a = this.bytesToStringSize(this.z7a);
    this.z8 = this.calculateP8(pozorovatelia, pocetOdoberania)
    this.z8a = this.calculateP8A(pozorovatelia, pocetOdoberania, 370)
    this.cz8a = this.bytesToStringSize(this.z8a);
    this.z9 = this.calculateP9(this.z5, this.z6, this.z7, this.z8)
    this.z9a = this.calculateP9A(this.z5a, this.z6a, this.z7a, this.z8a)
    this.cz9a = this.bytesToStringSize(this.z9a);

    this.v1 = this.calculateV1(this.p9, this.u15, this.z9)
    this.v1a = this.calculateV1A(this.p9a, this.u15a, this.z9a)
    this.cv1a = this.bytesToStringSize(this.v1a);
    this.v2 = this.calculateV2(this.v1, 60, 60, odoberania)
    this.v2a = this.calculateV2A(this.v1a, 60, 60, odoberania)
    this.cv2a = this.bytesToStringSize(this.v2a);
    this.v3 = this.calculateV3(this.v1, pozorovatelia)
    this.v3a = this.calculateV3A(this.v1a, pozorovatelia)
    this.cv3a = this.bytesToStringSize(this.v3a);

    // Dialog optimized
    this.dp5 = this.calculateDP5(pozorovatelia, 1)
    this.dp5a = this.calculateDP5A(pozorovatelia, 1, 450)
    this.dcp5a = this.bytesToStringSize(this.dp5a);
    this.dp6 = this.calculateDP6(pozorovatelia, 1)
    this.dp6a = this.calculateDP6A(pozorovatelia, 1, 370)
    this.dcp6a = this.bytesToStringSize(this.dp6a);
    this.dp7 = this.calculateDP7(pozorovatelia, 1)
    this.dp7a = this.calculateDP7A(1, pozorovatelia, 500, 3000, pocetOdoberania)
    this.dcp7a = this.bytesToStringSize(this.dp7a);
    this.dp8 = this.calculateDP8(pozorovatelia, 1)
    this.dp8a = this.calculateDP8A(pozorovatelia, 1, 370)
    this.dcp8a = this.bytesToStringSize(this.dp8a);
    this.dp9 = this.calculateDP9(this.dp5, this.dp6, this.dp7, this.dp8)
    this.dp9a = this.calculateDP9A(this.dp5a, this.dp6a, this.dp7a, this.dp8a)
    this.dcp9a = this.bytesToStringSize(this.dp9a);

    this.du7 = this.calculateDU7(pozorovatelia, odoberania, zmeny, pocetOdoberania)
    this.du7a = this.calculateDU7A(pozorovatelia, pocetOdoberania, 500, 3000, odoberania, zmeny)
    this.dcu7a = this.bytesToStringSize(this.du7a);
    this.du8 = this.calculateDU8(pozorovatelia, odoberania, zmeny, pocetOdoberania)
    this.du8a = this.calculateDU8A(pozorovatelia, odoberania, zmeny, pocetOdoberania, 370)
    this.dcu8a = this.bytesToStringSize(this.du8a);
    this.du9 = this.calculateDU9(this.du7, this.du8)
    this.du9a = this.calculateDU9A(this.du7a, this.du8a)
    this.dcu9a = this.bytesToStringSize(this.du9a);
    this.du10 = this.calculateDU10(pozorovatelia, odoberania, obnovenia, 1)
    this.du10a = this.calculateDU10A(pozorovatelia, odoberania, obnovenia, 1, 450)
    this.dcu10a = this.bytesToStringSize(this.du10a);
    this.du11 = this.calculateDU11(pozorovatelia, odoberania, obnovenia, 1)
    this.du11a = this.calculateDU11A(pozorovatelia, odoberania, obnovenia, 1, 370)
    this.dcu11a = this.bytesToStringSize(this.du11a);
    this.du12 = this.calculateDU12(pozorovatelia, odoberania, obnovenia, 1)
    this.du12a = this.calculateDU12A(pozorovatelia, odoberania, obnovenia, pocetOdoberania, 500, 3000)
    this.dcu12a = this.bytesToStringSize(this.du12a);
    this.du13 = this.calculateDU13(pozorovatelia, odoberania, obnovenia, 1)
    this.du13a = this.calculateDU13A(pozorovatelia, odoberania, obnovenia, pocetOdoberania, 370)
    this.dcu13a = this.bytesToStringSize(this.du13a);
    this.du14 = this.calculateDU14(this.du10, this.du11, this.du12, this.du13)
    this.du14a = this.calculateDU14A(this.du10a, this.du11a, this.du12a, this.du13a)
    this.dcu14a = this.bytesToStringSize(this.du14a);
    this.du15 = this.calculateDU15(this.du9, this.du14)
    this.du15a = this.calculateDU15A(this.du9a, this.du14a)
    this.dcu15a = this.bytesToStringSize(this.du15a);

    this.dz5 = this.calculateDP5(pozorovatelia, 1)
    this.dz5a = this.calculateDP5A(pozorovatelia, 1, 450)
    this.dcz5a = this.bytesToStringSize(this.dz5a);
    this.dz6 = this.calculateDP6(pozorovatelia, 1)
    this.dz6a = this.calculateDP6A(pozorovatelia, 1, 370)
    this.dcz6a = this.bytesToStringSize(this.dz6a);
    this.dz7 = this.calculateDP7(pozorovatelia, 1)
    this.dz7a = this.calculateDP7A(1, pozorovatelia, 500, 3000, pocetOdoberania)
    this.dcz7a = this.bytesToStringSize(this.dz7a);
    this.dz8 = this.calculateDP8(pozorovatelia, 1)
    this.dz8a = this.calculateDP8A(pozorovatelia, 1, 370)
    this.dcz8a = this.bytesToStringSize(this.dz8a);
    this.dz9 = this.calculateDP9(this.dz5, this.dz6, this.dz7, this.dz8)
    this.dz9a = this.calculateDP9A(this.dz5a, this.dz6a, this.dz7a, this.dz8a)
    this.dcz9a = this.bytesToStringSize(this.dz9a);

    this.dv1 = this.calculateDV1(this.dp9, this.du15, this.dz9)
    this.dv1a = this.calculateDV1A(this.dp9a, this.du15a, this.dz9a)
    this.dcv1a = this.bytesToStringSize(this.dv1a);
    this.dv2 = this.calculateDV2(this.dv1, 60, 60, odoberania)
    this.dv2a = this.calculateDV2A(this.dv1a, 60, 60, odoberania)
    this.dcv2a = this.bytesToStringSize(this.dv2a);
    this.dv3 = this.calculateDV3(this.dv1, pozorovatelia)
    this.dv3a = this.calculateDV3A(this.dv1a, pozorovatelia)
    this.dcv3a = this.bytesToStringSize(this.dv3a);

    let chartOptions = {
      chart: {
        type: "bar"
     },
     title: {
        text: "Počet poslaných správ"
     },
     xAxis:{
        categories:["Služba"]
     },
     yAxis: {
        title:{
           text:"Počet"
        }
     },
     series: [
       {
         name: 'Neoptimalizovaná služba',
         data: [this.v1]
      },
      {
       name: 'Služba optimalizovaná pomocou RLS',
       data: [this.dv1]
    }
     ]
    }
    this.percentageDifference = this.calculatePercentageDifference(this.dv1, this.v1);


    let chartOptions1 = {
      chart: {
        type: "bar"
     },
     title: {
        text: "Veľkosť poslaných správ"
     },
     xAxis:{
        categories:["Služba"]
     },
     yAxis: {
        title:{
           text:"Veľkosť správ v bajtoch"
        }
     },
     series: [
       {
         name: 'Neoptimalizovaná služba',
         data: [this.v1a]
      },
      {
       name: 'Služba optimalizovaná pomocou RLS',
       data: [this.dv1a]
    }
     ]
    }
    this.percentageDifference1 = this.calculatePercentageDifference(this.dv1a, this.v1a);

    // Notify optimized

    this.nu12 = this.calculateU12(0, 0, 1, 0)
    this.nu12a = this.calculateU12A(0, 0, 1, 0, 0, 0)
    this.ncu12a = this.bytesToStringSize(this.nu12a);
    this.nu13 = this.calculateU13(0, 0, 1, 0)
    this.nu13a = this.calculateU13A(0, 0, 1, 0, 0)
    this.ncu13a = this.bytesToStringSize(this.nu13a);
    this.nu14 = this.calculateU14(this.u10, this.u11, this.nu12, this.nu13)
    this.nu14a = this.calculateU14A(this.u10a, this.u11a, this.nu12a, this.nu13a)
    this.ncu14a = this.bytesToStringSize(this.nu14a);
    this.nu15 = this.calculateU15(this.u9, this.nu14)
    this.nu15a = this.calculateU15A(this.u9a, this.nu14a)
    this.ncu15a = this.bytesToStringSize(this.nu15a);

    this.nz7 = this.calculateP7(0, 0)
    this.nz7a = this.calculateP7A( 0, 0, 0, 0)
    this.ncz7a = this.bytesToStringSize(this.nz7a);
    this.nz8 = this.calculateP8(0, 0)
    this.nz8a = this.calculateP8A(0, 0, 0)
    this.ncz8a = this.bytesToStringSize(this.nz8a);
    this.nz9 = this.calculateP9(this.z5, this.z6, this.nz7, this.nz8)
    this.nz9a = this.calculateP9A(this.z5a, this.z6a, this.nz7a, this.nz8a)
    this.ncz9a = this.bytesToStringSize(this.nz9a);

    this.nv1 = this.calculateV1(this.p9, this.nu15, this.z9)
    this.nv1a = this.calculateV1A(this.p9a, this.nu15a, this.z9a)
    this.ncv1a = this.bytesToStringSize(this.nv1a);
    this.nv2 = this.calculateV2(this.nv1, 60, 60, odoberania)
    this.nv2a = this.calculateV2A(this.nv1a, 60, 60, odoberania)
    this.ncv2a = this.bytesToStringSize(this.nv2a);
    this.nv3 = this.calculateV3(this.nv1, pozorovatelia)
    this.nv3a = this.calculateV3A(this.nv1a, pozorovatelia)
    this.ncv3a = this.bytesToStringSize(this.nv3a);

    let chartOptions2 =  {
      chart: {
        type: "bar"
     },
     title: {
        text: "Počet poslaných správ"
     },
     xAxis:{
        categories:["Služba"]
     },
     yAxis: {
        title:{
           text:"Počet"
        }
     },
     series: [
       {
         name: 'Neoptimalizovaná služba',
         data: [this.v1]
      },
      {
       name: 'Optimalizácia služby NOTIFY',
       data: [this.nv1]
    }
     ]
    };
    this.percentageDifference2 = this.calculatePercentageDifference(this.nv1, this.v1);

    let chartOptions3 =  {
    chart: {
      type: "bar"
    },
    title: {
      text: "Veľkosť poslaných správ"
    },
    xAxis:{
      categories:["Služba"]
    },
    yAxis: {
      title:{
        text:"Veľkosť správ v bajtoch"
      }
    },
    series: [
     {
       name: 'Neoptimalizovaná služba',
       data: [this.v1a]
    },
    {
     name: 'Optimalizácia služby NOTIFY',
     data: [this.nv1a]
    }
    ]
    }
    this.percentageDifference3 = this.calculatePercentageDifference(this.nv1a, this.v1a);

    // Partial Notify optimized

    this.pu7 = this.calculateU7(pozorovatelia, odoberania, zmeny, pocetOdoberania)
    this.pu7a = this.calculateU7A(pozorovatelia, pocetOdoberania, 500, 1800, odoberania, zmeny)
    this.pcu7a = this.bytesToStringSize(this.pu7a);
    this.pu8 = this.calculateU8(pozorovatelia, odoberania, zmeny, pocetOdoberania)
    this.pu8a = this.calculateU8A(pozorovatelia, odoberania, zmeny, pocetOdoberania, 370)
    this.pcu8a = this.bytesToStringSize(this.pu8a);
    this.pu9 = this.calculateU9(this.pu7, this.pu8)
    this.pu9a = this.calculateU9A(this.pu7a, this.pu8a)
    this.pcu9a = this.bytesToStringSize(this.pu9a);
    this.pu10 = this.calculateU10(pozorovatelia, odoberania, obnovenia, pocetOdoberania)
    this.pu10a = this.calculateU10A(pozorovatelia, odoberania, obnovenia, pocetOdoberania, 450)
    this.pcu10a = this.bytesToStringSize(this.pu10a);
    this.pu11 = this.calculateU11(pozorovatelia, odoberania, obnovenia, pocetOdoberania)
    this.pu11a = this.calculateU11A(pozorovatelia, odoberania, obnovenia, pocetOdoberania, 370)
    this.pcu11a = this.bytesToStringSize(this.pu11a);
    this.pu12 = this.calculateU12(pozorovatelia, odoberania, obnovenia, pocetOdoberania)
    this.pu12a = this.calculateU12A(pozorovatelia, odoberania, obnovenia, pocetOdoberania, 500, 1800)
    this.pcu12a = this.bytesToStringSize(this.pu12a);
    this.pu13 = this.calculateU13(pozorovatelia, odoberania, obnovenia, pocetOdoberania)
    this.pu13a = this.calculateU13A(pozorovatelia, odoberania, obnovenia, pocetOdoberania, 370)
    this.pcu13a = this.bytesToStringSize(this.pu13a);
    this.pu14 = this.calculateU14(this.pu10, this.pu11, this.pu12, this.pu13)
    this.pu14a = this.calculateU14A(this.pu10a, this.pu11a, this.pu12a, this.pu13a)
    this.pcu14a = this.bytesToStringSize(this.pu14a);
    this.pu15 = this.calculateU15(this.pu9, this.pu14)
    this.pu15a = this.calculateU15A(this.pu9a, this.pu14a)
    this.pcu15a = this.bytesToStringSize(this.pu15a);

    this.pz7 = this.calculateP7(pozorovatelia, pocetOdoberania)
    this.pz7a = this.calculateP7A( pocetOdoberania, pozorovatelia, 500, 1800)
    this.pcz7a = this.bytesToStringSize(this.pz7a);
    this.pz8 = this.calculateP8(pozorovatelia, pocetOdoberania)
    this.pz8a = this.calculateP8A(pozorovatelia, pocetOdoberania, 370)
    this.pcz8a = this.bytesToStringSize(this.pz8a);
    this.pz9 = this.calculateP9(this.z5, this.z6, this.pz7, this.pz8)
    this.pz9a = this.calculateP9A(this.z5a, this.z6a, this.pz7a, this.pz8a)
    this.pcz9a = this.bytesToStringSize(this.pz9a);

    this.pv1 = this.calculateV1(this.p9, this.pu15, this.pz9)
    this.pv1a = this.calculateV1A(this.p9a, this.pu15a, this.pz9a)
    this.pcv1a = this.bytesToStringSize(this.pv1a);
    this.pv2 = this.calculateV2(this.pv1, 60, 60, odoberania)
    this.pv2a = this.calculateV2A(this.pv1a, 60, 60, odoberania)
    this.pcv2a = this.bytesToStringSize(this.pv2a);
    this.pv3 = this.calculateV3(this.pv1, pozorovatelia)
    this.pv3a = this.calculateV3A(this.pv1a, pozorovatelia)
    this.pcv3a = this.bytesToStringSize(this.pv3a);

    let chartOptions4 =  {
      chart: {
        type: "bar"
     },
     title: {
        text: "Počet poslaných správ"
     },
     xAxis:{
        categories:["Služba"]
     },
     yAxis: {
        title:{
           text:"Počet"
        }
     },
     series: [
       {
         name: 'Neoptimalizovaná služba',
         data: [this.v1]
      },
      {
       name: 'Optimalizácia služby NOTIFY',
       data: [this.pv1]
    }
     ]
    };
    this.percentageDifference4 = this.calculatePercentageDifference(this.pv1, this.v1);

    let chartOptions5 =  {
    chart: {
      type: "bar"
    },
    title: {
      text: "Veľkosť poslaných správ"
    },
    xAxis:{
      categories:["Služba"]
    },
    yAxis: {
      title:{
        text:"Veľkosť správ v bajtoch"
      }
    },
    series: [
     {
       name: 'Neoptimalizovaná služba',
       data: [this.v1a]
    },
    {
     name: 'Optimalizácia služby NOTIFY',
     data: [this.pv1a]
    }
    ]
    }
    this.percentageDifference5 = this.calculatePercentageDifference(this.pv1a, this.v1a);

    // Combination DIALOG, NOTIFY and PARTIAL NOTIFY optimized

    this.bu7 = this.calculateDU7(pozorovatelia, odoberania, zmeny, pocetOdoberania)
    this.bu7a = this.calculateDU7A(pozorovatelia, pocetOdoberania, 500, 1800, odoberania, zmeny)
    this.bcu7a = this.bytesToStringSize(this.bu7a);
    this.bu8 = this.calculateDU8(pozorovatelia, odoberania, zmeny, pocetOdoberania)
    this.bu8a = this.calculateDU8A(pozorovatelia, odoberania, zmeny, pocetOdoberania, 370)
    this.bcu8a = this.bytesToStringSize(this.du8a);
    this.bu9 = this.calculateDU9(this.bu7, this.bu8)
    this.bu9a = this.calculateDU9A(this.bu7a, this.bu8a)
    this.bcu9a = this.bytesToStringSize(this.bu9a);
    this.bu10 = this.calculateDU10(pozorovatelia, odoberania, obnovenia, 1)
    this.bu10a = this.calculateDU10A(pozorovatelia, odoberania, obnovenia, 1, 450)
    this.bcu10a = this.bytesToStringSize(this.bu10a);
    this.bu11 = this.calculateDU11(pozorovatelia, odoberania, obnovenia, 1)
    this.bu11a = this.calculateDU11A(pozorovatelia, odoberania, obnovenia, 1, 370)
    this.bcu11a = this.bytesToStringSize(this.bu11a);
    this.bu12 = this.calculateDU12(0, 0, 1, 0)
    this.bu12a = this.calculateDU12A(0, 0, 1, 0, 0, 0)
    this.bcu12a = this.bytesToStringSize(this.bu12a);
    this.bu13 = this.calculateDU13(0, 0, 1, 0)
    this.bu13a = this.calculateDU13A(0, 0, 1, 0, 0)
    this.bcu13a = this.bytesToStringSize(this.bu13a);
    this.bu14 = this.calculateDU14(this.bu10, this.bu11, this.bu12, this.bu13)
    this.bu14a = this.calculateDU14A(this.bu10a, this.bu11a, this.bu12a, this.bu13a)
    this.bcu14a = this.bytesToStringSize(this.bu14a);
    this.bu15 = this.calculateDU15(this.bu9, this.bu14)
    this.bu15a = this.calculateDU15A(this.bu9a, this.bu14a)
    this.bcu15a = this.bytesToStringSize(this.bu15a);

    this.bz7 = this.calculateDP7(0, 0)
    this.bz7a = this.calculateDP7A(0, 0, 0, 0, 0)
    this.bcz7a = this.bytesToStringSize(this.bz7a);
    this.bz8 = this.calculateDP8(0, 0)
    this.bz8a = this.calculateDP8A(0, 0, 0)
    this.bcz8a = this.bytesToStringSize(this.dz8a);
    this.bz9 = this.calculateDP9(this.dz5, this.dz6, this.bz7, this.bz8)
    this.bz9a = this.calculateDP9A(this.dz5a, this.dz6a, this.bz7a, this.bz8a)
    this.bcz9a = this.bytesToStringSize(this.bz9a);

    this.bv1 = this.calculateDV1(this.dp9, this.bu15, this.bz9)
    this.bv1a = this.calculateDV1A(this.dp9a, this.bu15a, this.bz9a)
    this.bcv1a = this.bytesToStringSize(this.bv1a);
    this.bv2 = this.calculateDV2(this.bv1, 60, 60, odoberania)
    this.bv2a = this.calculateDV2A(this.bv1a, 60, 60, odoberania)
    this.bcv2a = this.bytesToStringSize(this.bv2a);
    this.bv3 = this.calculateDV3(this.bv1, pozorovatelia)
    this.bv3a = this.calculateDV3A(this.bv1a, pozorovatelia)
    this.bcv3a = this.bytesToStringSize(this.bv3a);

    let chartOptions6 = {
      chart: {
        type: "bar"
     },
     title: {
        text: "Počet poslaných správ"
     },
     xAxis:{
        categories:["Služba"]
     },
     yAxis: {
        title:{
           text:"Počet"
        }
     },
     series: [
       {
         name: 'Neoptimalizovaná služba',
         data: [this.v1]
      },
      {
       name: 'Služba optimalizovaná pomocou RLS',
       data: [this.bv1]
    }
     ]
    }
    this.percentageDifference6 = this.calculatePercentageDifference(this.bv1, this.v1);

    let chartOptions7 = {
      chart: {
        type: "bar"
     },
     title: {
        text: "Veľkosť poslaných správ"
     },
     xAxis:{
        categories:["Služba"]
     },
     yAxis: {
        title:{
          text:"Veľkosť správ v bajtoch"
        }
     },
     series: [
       {
         name: 'Neoptimalizovaná služba',
         data: [this.v1a]
      },
      {
       name: 'Služba optimalizovaná pomocou RLS',
       data: [this.bv1a]
    }
     ]
    }
    this.percentageDifference7 = this.calculatePercentageDifference(this.bv1a, this.v1a);

    switch(graphType) {
      case GraphType.USER_DATA:
        this.firstChartOptions = chartOptions
        this.secondChartOptions = chartOptions1
        this.thirdChartOptions = chartOptions2
        this.fourthChartOptions = chartOptions3
        this.fifthChartOptions = chartOptions4
        this.sixthChartOptions = chartOptions5
        this.seventhChartOptions = chartOptions6
        this.eightChartOptions = chartOptions7
        break
      case GraphType.USER_DATA:
       this.secondChartOptions = chartOptions1
        break
     // case GraphType.POZOROVATELIA_1000:
      //  this.thirdChartOptions = chartOptions
      //  break
    }
  }
//Non optimized
  calculateP5(number1: number, number2: number) {
    return Math.floor(number1 * number2)
  }
  calculateP5A(number1: number, number2: number, number3: number) {
    return number1 * number2 * number3
  }
  calculateP6(number1: number, number2: number) {
    return Math.floor(number1 * number2)
  }
  calculateP6A(number1: number, number2: number, number3: number) {
    return number1 * number2 * number3
  }
  calculateP7(number1: number, number2: number) {
    return Math.floor(number1 * number2)
  }
  calculateP7A(number1: number, number2: number, number3: number, number4: number) {
    return (number1 * number2 * (number3 + number4))
  }
  calculateP8(number1: number, number2: number) {
    return Math.floor(number1 * number2)
  }
  calculateP8A(number1: number, number2: number, number3: number) {
    return number1 * number2 * number3
  }
  calculateP9(number1: number, number2: number, number3: number, number4: number) {
    return Math.floor(number1 + number2 + number3 + number4)
  }
  calculateP9A(number1: number, number2: number, number3: number, number4: number) {
    return number1 + number2 + number3 + number4
  }

  calculateU7(number1: number, number2: number, number3: number, number4: number) {
      if ((number1 * (number2 * number3 -2) * number4) < 0){
      return Math.floor((number1 * (number2 * number3 -2) * number4)*(-1))
      }
      return Math.floor(number1 * (number2 * number3 -2) * number4)
  }
  calculateU7A(number1: number, number2: number, number3: number, number4: number, number5: number, number6: number) {
    if (((number1 * number2) * (number3 + number4) * (number5 * number6 -2)) < 0){
    return (((number1 * number2) * (number3 + number4) * (number5 * number6 -2))*(-1))
    } else return ((number1 * number2) * (number3 + number4) * (number5 * number6 -2))
  }
  calculateU8(number1: number, number2: number, number3: number, number4: number) {
      if ((number1 * (number2 * number3 -2) * number4) < 0){
      return Math.floor((number1 * (number2 * number3 -2) * number4)*(-1))
      }
      return Math.floor(number1 * (number2 * number3 -2) * number4)
  }
  calculateU8A(number1: number, number2: number, number3: number, number4: number, number5: number) {
      if ((number1 * (number2 * number3 -2) * number4 * number5) < 0){
      return ((number1 * (number2 * number3 -2) * number4 * number5)*(-1))
      }
      return (number1 * (number2 * number3 -2) * number4 * number5)
  }
  calculateU9(number1: number, number2: number) {
    return Math.floor(number1 + number2)
  }
  calculateU9A(number1: number, number2: number) {
    return number1 + number2
  }
  calculateU10(number1: number, number2: number, number3: number, number4: number) {
    if(number3 == 0){
      return (0)
    }
    else if ((((number2/number3)-1) * number4) * number1 < 0){
      return Math.floor((((number2/number3)-1) * number4) * number1*(-1))
      }
     else return Math.floor((((number2/number3)-1) * number4) * number1)
  }

  calculateU10A(number1: number, number2: number, number3: number, number4: number, number5: number) {
    if(number3 == 0){
      return (0)
    }
    else if ((number1 * (((number2/number3)-1) * number4) * number5) < 0){
      return ((number1 * (((number2/number3)-1) * number4) * number5)*(-1))
      }
      else return (number1 * (((number2/number3)-1) * number4) * number5)
  }
  calculateU11(number1: number, number2: number, number3: number, number4: number) {
    if(number3 == 0){
      return (0)
    }
    else if ((number1 * (((number2/number3)-1) * number4)) < 0){
      return Math.floor((number1 * (((number2/number3)-1) * number4))*(-1))
      }
      else return Math.floor(number1 * (((number2/number3)-1) * number4))
  }
  calculateU11A(number1: number, number2: number, number3: number, number4: number, number5: number) {
    if(number3 == 0){
      return (0)
    }
    else if ((number1 * (((number2/number3)-1) * number4) * number5) < 0){
      return ((number1 * (((number2/number3)-1) * number4) * number5)*(-1))
      }
      else return (number1 * (((number2/number3)-1) * number4) * number5)
  }
  calculateU12(number1: number, number2: number, number3: number, number4: number) {
    if(number3 == 0){
      return (0)
    }
    else if ((number1 * (((number2/number3)-1) * number4)) < 0){
      return Math.floor((number1 * (((number2/number3)-1) * number4))*(-1))
      }
      else return Math.floor(number1 * (((number2/number3)-1) * number4))
  }
  calculateU12A(number1: number, number2: number, number3: number, number4: number, number5: number, number6: number) {
    if(number3 == 0){
      return (0)
    }
    else if ((number1 * (((number2/number3)-1) * number4) * (number5 + number6)) < 0){
      return ((number1 * (((number2/number3)-1) * number4) * (number5 + number6))*(-1))
      }
      else return (number1 * (((number2/number3)-1) * number4) * (number5 + number6))
  }
  calculateU13(number1: number, number2: number, number3: number, number4: number) {
    if(number3 == 0){
      return (0)
    }
    else if ((number1 * (((number2/number3)-1) * number4)) < 0){
      return Math.floor((number1 * (((number2/number3)-1) * number4))*(-1))
      }
      else return Math.floor(number1 * (((number2/number3)-1) * number4))
  }
  calculateU13A(number1: number, number2: number, number3: number, number4: number, number5: number) {
    if(number3 == 0){
      return (0)
    }
    else if ((number1 * (((number2/number3)-1) * number4) * number5) < 0){
      return ((number1 * (((number2/number3)-1) * number4) * number5)*(-1))
      }
      else return (number1 * (((number2/number3)-1) * number4) * number5)
  }
  calculateU14(number1: number, number2: number, number3: number, number4: number) {
    return Math.floor(number1 + number2 + number3 + number4)
  }
  calculateU14A(number1: number, number2: number, number3: number, number4: number) {
    return number1 + number2 + number3 + number4
  }
  calculateU15(number1: number, number2: number) {
    return Math.floor(number1 + number2)
  }
  calculateU15A(number1: number, number2: number) {
    return number1 + number2
  }

  calculateV1(number1: number, number2: number, number3: number) {
    return Math.floor(number1 + number2 + number3)
  }
  calculateV1A(number1: number, number2: number, number3: number) {
    return number1 + number2 + number3
  }
  calculateV2(number1: number, number2: number, number3: number, number4: number) {
    if((number2 * number3 * number4) == 0){
      return (0)
    }
    else return Math.floor(number1 / (number2 * number3 * number4))
  }
  calculateV2A(number1: number, number2: number, number3: number, number4: number) {
    if((number2 * number3 * number4) == 0){
      return (0)
    }
    else return (number1 / (number2 * number3 * number4))
  }
  calculateV3(number1: number, number2: number) {
    if((number2) == 0){
      return (0)
    }
    else return Math.floor(number1 / number2)
  }
  calculateV3A(number1: number, number2: number) {
    if((number2) == 0){
      return (0)
    }
    else return (number1 / number2)
  }

  // Dialog optimized
  calculateDP5(number1: number, number2: number) {
    return Math.floor(number1 * number2)
  }
  calculateDP5A(number1: number, number2: number, number3: number) {
    return number1 * number2 * number3
  }
  calculateDP6(number1: number, number2: number) {
    return Math.floor(number1 * number2)
  }
  calculateDP6A(number1: number, number2: number, number3: number) {
    return number1 * number2 * number3
  }
  calculateDP7(number1: number, number2: number) {
    return Math.floor(number1 * number2)
  }
  calculateDP7A(number1: number, number2: number, number3: number, number4: number, number5: number) {
    return ((number1 * number2 * (number3 + 144 + 144))+(number1 * number2 * number5 * (number4 + 160 + 144)))
  }
  calculateDP8(number1: number, number2: number) {
    return Math.floor(number1 * number2)
  }
  calculateDP8A(number1: number, number2: number, number3: number) {
    return number1 * number2 * number3
  }
  calculateDP9(number1: number, number2: number, number3: number, number4: number) {
    return Math.floor(number1 + number2 + number3 + number4)
  }
  calculateDP9A(number1: number, number2: number, number3: number, number4: number) {
    return number1 + number2 + number3 + number4
  }

  calculateDU7(number1: number, number2: number, number3: number, number4: number) {
      if ((number1 * (number2 * number3 -2) * number4) < 0){
      return Math.floor((number1 * (number2 * number3 -2) * number4)*(-1))
      }
      return Math.floor(number1 * (number2 * number3 -2) * number4)
  }
  calculateDU7A(number1: number, number2: number, number3: number, number4: number, number5: number, number6: number) {
      if (((number1 * number2) * ((number3 + number4 + 144 + 144 + 160 + 144) * (number5 * number6 -2))) < 0){
      return (((number1 * number2) * ((number3 + number4 + 144 + 144 + 160 + 144) * (number5 * number6 -2)))*(-1))
      }
      return ((number1 * number2) * ((number3 + number4 + 144 + 144 + 160 + 144) * (number5 * number6 -2)))
  }
  calculateDU8(number1: number, number2: number, number3: number, number4: number) {
      if ((number1 * (number2 * number3 -2) * number4) < 0){
      return Math.floor((number1 * (number2 * number3 -2) * number4)*(-1))
      }
      return Math.floor(number1 * (number2 * number3 -2) * number4)
  }
  calculateDU8A(number1: number, number2: number, number3: number, number4: number, number5: number) {
      if (((number1 * number4) * (number2 * number3 -2) * number5) < 0){
      return (((number1 * number4) * (number2 * number3 -2) * number5)*(-1))
      }
      return ((number1 * number4) * (number2 * number3 -2) * number5)
  }
  calculateDU9(number1: number, number2: number) {
    return Math.floor(number1 + number2)
  }
  calculateDU9A(number1: number, number2: number) {
    return number1 + number2
  }
  calculateDU10(number1: number, number2: number, number3: number, number4: number) {
    if((number3) == 0){
      return (0)
    }
    else if (((((number2/number3)-1) * number4) * number1) < 0){
      return Math.floor(((((number2/number3)-1) * number4) * number1)*(-1))
      }
      else return Math.floor((((number2/number3)-1) * number4) * number1)
  }
  calculateDU10A(number1: number, number2: number, number3: number, number4: number, number5: number) {
    if((number3) == 0){
      return (0)
    }
    else if ((number1 * (((number2/number3)-1) * number4) * number5) < 0){
      return ((number1 * (((number2/number3)-1) * number4) * number5)*(-1))
      }
     else return (number1 * (((number2/number3)-1) * number4) * number5)
  }
  calculateDU11(number1: number, number2: number, number3: number, number4: number) {
    if((number3) == 0){
      return (0)
    }
    else if ((number1 * (((number2/number3)-1) * number4)) < 0){
      return Math.floor((number1 * (((number2/number3)-1) * number4))*(-1))
      }
      else return Math.floor(number1 * (((number2/number3)-1) * number4))
  }
  calculateDU11A(number1: number, number2: number, number3: number, number4: number, number5: number) {
    if((number3) == 0){
      return (0)
    }
    else if ((number1 * (((number2/number3)-1) * number4) * number5) < 0){
      return ((number1 * (((number2/number3)-1) * number4) * number5)*(-1))
      }
     else return (number1 * (((number2/number3)-1) * number4) * number5)
  }
  calculateDU12(number1: number, number2: number, number3: number, number4: number) {
    if((number3) == 0){
      return (0)
    }
    else if ((number1 * (((number2/number3)-1) * number4)) < 0){
      return Math.floor((number1 * (((number2/number3)-1) * number4))*(-1))
      }
      else return Math.floor(number1 * (((number2/number3)-1) * number4))
  }
  calculateDU12A(number1: number, number2: number, number3: number, number4: number, number5: number, number6: number) {
    if((number3) == 0){
      return (0)
    }
    else if ((number1 * ((((number2/number3)-1)) * ((number5 + 144 + 144) + (number4 * (number6 + 160 + 144))))) < 0){
      return ((number1 * ((((number2/number3)-1)) * ((number5 + 144 + 144) + (number4 * (number6 + 160 + 144)))))*(-1))
      }
     else return (number1 * ((((number2/number3)-1)) * ((number5 + 144 + 144) + (number4 * (number6 + 160 + 144)))))
  }
  calculateDU13(number1: number, number2: number, number3: number, number4: number) {
    if((number3) == 0){
      return (0)
    }
    else if ((number1 * (((number2/number3)-1) * number4)) < 0){
      return Math.floor((number1 * (((number2/number3)-1) * number4))*(-1))
      }
      else return Math.floor(number1 * (((number2/number3)-1) * number4))
  }
  calculateDU13A(number1: number, number2: number, number3: number, number4: number, number5: number) {
    if((number3) == 0){
      return (0)
    }
    else if ((number1 * (((number2/number3)-1) * number4) * number5) < 0){
      return ((number1 * (((number2/number3)-1) * number4) * number5)*(-1))
      }
     else return (number1 * (((number2/number3)-1) * number4) * number5)
  }
  calculateDU14(number1: number, number2: number, number3: number, number4: number) {
    return Math.floor(number1 + number2 + number3 + number4)
  }
  calculateDU14A(number1: number, number2: number, number3: number, number4: number) {
    return number1 + number2 + number3 + number4
  }
  calculateDU15(number1: number, number2: number) {
    return Math.floor(number1 + number2)
  }
  calculateDU15A(number1: number, number2: number) {
    return number1 + number2
  }

  calculateDV1(number1: number, number2: number, number3: number) {
    return Math.floor(number1 + number2 + number3)
  }
  calculateDV1A(number1: number, number2: number, number3: number) {
    return number1 + number2 + number3
  }
  calculateDV2(number1: number, number2: number, number3: number, number4: number) {
    if((number2 * number3 * number4) == 0){
      return (0)
    }
    else return Math.floor(number1 / (number2 * number3 * number4))
  }
  calculateDV2A(number1: number, number2: number, number3: number, number4: number) {
    if((number2 * number3 * number4) == 0){
      return (0)
    }
    else return (number1 / (number2 * number3 * number4))
  }
  calculateDV3(number1: number, number2: number) {
    if((number2) == 0){
      return (0)
    }
    else return Math.floor(number1 / number2 )
  }
  calculateDV3A(number1: number, number2: number) {
    if((number2) == 0){
      return (0)
    }
    else return (number1 / number2)
  }

  calculatePercentageDifference(currentValue: number, previousValue: number): number {
    const difference = currentValue - previousValue;
    const percentageDifference = ((difference / previousValue) * 100).toFixed(2);
    const num = parseFloat(percentageDifference);
    if (num < 0){
      return (num * (-1));
    }
    else return num;
  }


  bytesToStringSize(bytes: number): string {
    if (bytes < 1024) {
      return `${bytes.toFixed(2)} B`;
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

  highcharts: typeof Highcharts = Highcharts;
  firstChartOptions =  {
    chart: {
      type: "bar"
   },
   title: {
      text: "Počet poslaných správ"
   },
   xAxis:{
      categories:["Služba"]
   },
   yAxis: {
      title:{
         text:"Počet"
      }
   },
   series: [
     {
       name: 'Neoptimalizovaná služba',
       data: [this.v1]
    },
    {
     name: 'Služba optimalizovaná pomocou RLS',
     data: [this.dv1]
  }
   ]
};
secondChartOptions =  {
  chart: {
    type: "bar"
 },
 title: {
    text: "Veľkosť poslaných správ"
 },
 xAxis:{
    categories:["Služba"]
 },
 yAxis: {
    title:{
       text:"Veľkosť"
    }
 },
 series: [
   {
     name: 'Neoptimalizovaná služba',
     data: [this.v1a]
  },
  {
   name: 'Služba optimalizovaná pomocou RLS',
   data: [this.dv1a]
}
 ]

};
thirdChartOptions =  {
  chart: {
    type: "bar"
 },
 title: {
    text: "Počet poslaných správ"
 },
 xAxis:{
    categories:["Služba"]
 },
 yAxis: {
    title:{
       text:"Počet"
    }
 },
 series: [
   {
     name: 'Neoptimalizovaná služba',
     data: [this.v1]
  },
  {
   name: 'Služba optimalizovaná pomocou RLS',
   data: [this.nv1]
}
 ]
};
fourthChartOptions =  {
chart: {
  type: "bar"
},
title: {
  text: "Veľkosť poslaných správ"
},
xAxis:{
  categories:["Služba"]
},
yAxis: {
  title:{
     text:"Veľkosť"
  }
},
series: [
 {
   name: 'Neoptimalizovaná služba',
   data: [this.v1a]
},
{
 name: 'Služba optimalizovaná pomocou RLS',
 data: [this.nv1a]
}
]

};
fifthChartOptions =  {
  chart: {
    type: "bar"
 },
 title: {
    text: "Počet poslaných správ"
 },
 xAxis:{
    categories:["Služba"]
 },
 yAxis: {
    title:{
       text:"Počet"
    }
 },
 series: [
   {
     name: 'Neoptimalizovaná služba',
     data: [this.v1]
  },
  {
   name: 'Optimalizácia služby NOTIFY',
   data: [this.pv1]
}
 ]
};
sixthChartOptions =  {
chart: {
  type: "bar"
},
title: {
  text: "Veľkosť poslaných správ"
},
xAxis:{
  categories:["Služba"]
},
yAxis: {
  title:{
     text:"Veľkosť"
  }
},
series: [
  {
    name: 'Neoptimalizovaná služba',
    data: [this.v1a]
 },
 {
  name: 'Optimalizácia služby NOTIFY',
  data: [this.pv1a]
}
]
};
seventhChartOptions =  {
  chart: {
    type: "bar"
  },
  title: {
    text: "Veľkosť poslaných správ"
  },
  xAxis:{
    categories:["Služba"]
  },
  yAxis: {
    title:{
       text:"Veľkosť"
    }
  },
  series: [
    {
      name: 'Neoptimalizovaná služba',
      data: [this.v1]
   },
   {
    name: 'Optimalizácia služby NOTIFY',
    data: [this.bv1]
  }
  ]
  };
  eightChartOptions =  {
    chart: {
      type: "bar"
    },
    title: {
      text: "Veľkosť poslaných správ"
    },
    xAxis:{
      categories:["Služba"]
    },
    yAxis: {
      title:{
         text:"Veľkosť"
      }
    },
    series: [
      {
        name: 'Neoptimalizovaná služba',
        data: [this.v1a]
     },
     {
      name: 'Optimalizácia služby NOTIFY',
      data: [this.bv1a]
    }
    ]
    };
}

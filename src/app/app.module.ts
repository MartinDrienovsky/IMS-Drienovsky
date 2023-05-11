import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './core/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactService } from './contact.service';
import { DialogComponent } from './contact-form/dialog/dialog.component';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { CalculateModelComponent } from './calculate-model/calculate-model.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactFormComponent,
    DialogComponent,
    CalculateModelComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    HighchartsChartModule,
    MatSlideToggleModule,
    MatTabsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}

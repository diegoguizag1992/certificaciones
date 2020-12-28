import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearproveedoresComponent } from './component/logeado/crearproveedores/crearproveedores.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { GenerarCertificadoComponent } from './component/logeado/generar-certificado/generar-certificado.component';
import { NgxSpinnerModule } from 'ngx-spinner';




@NgModule({
  declarations: [
    AppComponent,
    CrearproveedoresComponent,
    GenerarCertificadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatRadioModule,
    HttpClientModule,
    NgxSpinnerModule,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentsComponent } from './form-components/form-components.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';

import { FileuploadComponent } from './fileupload/fileupload.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

/*hola*/
@NgModule({
  declarations: [
    AppComponent,
    FormComponentsComponent,
    FileuploadComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxCaptchaModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

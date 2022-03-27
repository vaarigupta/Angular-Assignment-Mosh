import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { TitleCasePipe } from './titlecase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TitlecaseComponent,
    TitleCasePipe
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { DataTableModule}  from 'primeng/primeng';
import { ReadCsvComponent } from './read-csv/read-csv.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadCsvComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DataTableModule,
    TableModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

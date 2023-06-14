import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { EnterUpdateComponent } from './enter-update/enter-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    LinechartComponent,
    EnterUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

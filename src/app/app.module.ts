import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { FactoryComponent } from './factory/factory.component';
import { HallComponent } from './hall/hall.component';
import { MachineComponent } from './machine/machine.component';
import {DummyDataService} from "./dummy-data.service";
import {FactoryDataService} from "./factory-data-service";
import {HeaderComponent} from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    FactoryComponent,
    HallComponent,
    MachineComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DummyDataService,
    FactoryDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

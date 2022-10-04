import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { SampleListComponent } from './components/common/sample-list/sample-list.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { TwoWayBindingBroComponent } from './components/two-way-binding-bro/two-way-binding-bro.component';
import { Child1Component } from './components/two-way-binding-bro/child1/child1.component';
import { Child2Component } from './components/two-way-binding-bro/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SampleListComponent,
    TwoWayBindingComponent,
    TwoWayBindingBroComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

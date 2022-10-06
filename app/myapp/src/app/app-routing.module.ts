import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { TwoWayBindingBroComponent } from './components/two-way-binding-bro/two-way-binding-bro.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'two-way-binding-bro', component: TwoWayBindingBroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

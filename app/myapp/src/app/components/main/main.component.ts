import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SampleListComponent } from './sample-list/sample-list.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  num: number = 2;
}

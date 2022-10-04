import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  num: number = 1; // これが子コンポーネントに初期値として渡される
}

import { Component } from '@angular/core';
import { ValueSharedService  } from '../../../service/value-shared.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {

  get fullName() {
    // Serviceから値を取ってくる
    return `${this.valueSharedService.lastName} ${this.valueSharedService.firstName}`;
  }

  // コンストラクターでServiceを初期化宣言
  constructor(private valueSharedService: ValueSharedService) { }

}

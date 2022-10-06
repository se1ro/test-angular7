import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sample-list',
  templateUrl: './sample-list.component.html',
  styleUrls: ['./sample-list.component.scss']
})
export class SampleListComponent {

   /** 表示リスト */
  list: number[] = [1, 2, 3, 4, 5];

  /** 選択値 */
  @Input()
  value: number = 0;

  /** 選択値変更 */
  @Output()
  valueChange = new EventEmitter<number>();

  /**
    * 選択値変更処理
    * @param num
    */
  changeValue(num: number): void {
    this.value = num;
    this.valueChange.emit(num);
  }

}

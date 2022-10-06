import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ValueSharedService  } from '../../../service/value-shared.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  constructor(private valueSharedService: ValueSharedService, private fb: FormBuilder) { }

  form = new FormGroup({});

  // 描画時に1度だけ呼ばれる（Angularのライフサイクルの一部）
  ngOnInit() {
    // formとServiceのデータをバインド
    this.form = this.fb.group({
      lastName: this.valueSharedService.lastName,
      firstName: this.valueSharedService.firstName,
    });
  }

  onChangeName() {
    // 変更するたびにformで取った各データをServiceに上書き
    this.valueSharedService.lastName = this.form.get('lastName').value;
    this.valueSharedService.firstName = this.form.get('firstName').value;
  }

}

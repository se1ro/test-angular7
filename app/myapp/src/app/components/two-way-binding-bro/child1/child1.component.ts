import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ValueSharedService  } from '../../../service/value-shared.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private valueSharedService: ValueSharedService, private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      lastName: this.valueSharedService.lastName,
      firstName: this.valueSharedService.firstName,
    });
  }

  onChangeName() {
    this.valueSharedService.lastName = this.form.get('lastName').value;
    this.valueSharedService.firstName = this.form.get('firstName').value;
  }

}

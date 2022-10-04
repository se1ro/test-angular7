import { Component } from '@angular/core';
import { ValueSharedService  } from '../../../service/value-shared.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {

  get fullName() {
    return `${this.valueSharedService.lastName} ${this.valueSharedService.firstName}`;
  }

  constructor(private valueSharedService: ValueSharedService) { }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FieldBase } from './form-field/field-base';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html'
})
export class FormControlComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() field: FieldBase<any>;

  constructor() { }

  ngOnInit(): void {

  }

}

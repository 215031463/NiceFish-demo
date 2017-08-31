import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appValidateEqual]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: EqualValidatorDirective, multi: true }
  ]
})
export class EqualValidatorDirective implements Validator {
  @Input() appValidateEqual: string;
  @Input() revserse: boolean;

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } {
    // 当前控件的值
    let selfValue = control.value;
    // 需要比较的控件，根据属性名字获取
    let targetControl = control.root.get(this.appValidateEqual);
    // 值不相等
    if (targetControl && targetControl.value !== selfValue) {
      if (!this.revserse) {
        return { validateEqual: false };
      } else {
        targetControl.setErrors({ ValidateEqual: false });
      }
    } else {// 值相等
      targetControl.setErrors(null);
    }
    return null;
  }

}

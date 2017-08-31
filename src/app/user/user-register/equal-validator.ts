import { AbstractControl, ValidatorFn } from '@angular/forms';

export function EqualValidate(targetControlName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    if (!targetControlName) {
      console.error('一致性校验器必须接受一个目标参数');
      return { 'validateEqual': true };
    }
    let targetControl = control.root.get(targetControlName);
    if (targetControl && targetControl.value !== control.value) {
      return { 'validateEqual': true };
    } else {
     return null;
    }
  };
}

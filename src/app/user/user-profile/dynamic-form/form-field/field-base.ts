export class FieldBase<T> {
  value: T;
  key: string;
  label: string;
  controlType: string;
  placeholder: string;
  required: boolean;

  constructor(options: {
    value?: T,
    key?: string;
    label?: string;
    controlType?: string;
    placeholder?: string;
    required?: boolean;
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.controlType = options.controlType || '';
    this.placeholder = options.placeholder || '';
    this.required = !!options.required;
  }
}

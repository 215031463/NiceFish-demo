import { FieldBase } from './field-base';

export class Image extends FieldBase<string> {
  controlType = 'image';
  src: string;
  title: string;
  constructor(options: {} = {}) {
    super(options);
    this.src = options['src'] || '';
    this.title = options['title'] || '这是一张图片';
  }
}

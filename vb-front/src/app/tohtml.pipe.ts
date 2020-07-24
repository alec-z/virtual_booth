import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Pipe({
  name: 'tohtml'
})
export class TohtmlPipe implements PipeTransform {

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  transform(value: string, args?: number): SafeHtml {
    const temp =  value;
    return this.sanitizer.bypassSecurityTrustHtml(temp);
  }
}

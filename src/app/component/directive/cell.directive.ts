import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: 'ngvn-cell'
})
export class CellDirective {

  constructor(
    public template: TemplateRef<any>
  ) { }

}

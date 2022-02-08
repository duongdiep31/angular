import { ContentChild, Directive, Input } from '@angular/core';
import { CellDirective } from './cell.directive';
import { HeaderDirective } from './header.directive';
import { COL_DATA_TYPES } from 'src/app/model';
@Directive({
  selector: 'ngvn-colum'
})
export class ColumsDirective {
  @Input() header = '';
  @Input() key ='';
  @Input() renderKey =''
  @Input() dataType = COL_DATA_TYPES.TEXT
  @ContentChild(CellDirective, {static: true}) tplCell?: CellDirective
  @ContentChild(HeaderDirective, {static: true}) tplHeader?: HeaderDirective
  constructor() { }
}

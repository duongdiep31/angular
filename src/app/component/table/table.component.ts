import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { COL_DATA_TYPES, Dictionary } from 'src/app/model';
import { ColumsDirective } from '../directive/colums.directive';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() rows: Dictionary[] =[]
  @Output() id = new EventEmitter<number>()
  @Output() data = new EventEmitter<Object>()
  @Output() view = new EventEmitter<boolean>()
  @Input() string =''
  @Input() lengthArea = 0
  @ContentChildren(ColumsDirective) colum!: QueryList<ColumsDirective>;
  zz = '';
  subscription: Subscription | undefined;
  COL_DATA_TYPE = COL_DATA_TYPES;
  constructor(private router: Router) { }
  ngOnInit(): void {  
  }
  handleRemove(data: any){
    this.id.emit(data)
  }
  handleChange(item: any){
     this.data.emit(item)
  }
  handleView(data:any){
    if (this.string === 'user') {
      this.view.emit(data)
    }else if(this.string === 'project'){
      this.router.navigate([`/view/${data._id}`])
    }else if (this.string === 'viewProject') {
      this.view.emit(data)
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { COL_DATA_TYPES } from 'src/app/model';
import {UsersService} from '../../auth/users.service'
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  COL_DATA_TYPE = COL_DATA_TYPES;
  title = 'user'
  datas =[]
  constructor(private service: UsersService,
    private message: NzMessageService,
    ) { }
    getAll(){
      this.service.getAll().subscribe((res: any)=>{
         this.datas = res.list
      })
    }
  ngOnInit(): void {
    this.getAll()
  }

}

import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from 'src/app/auth/auth.service';
import { COL_DATA_TYPES } from 'src/app/model';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  COL_DATA_TYPE = COL_DATA_TYPES;
  title = 'user'
  datas =[]
  constructor(private service: AuthService,
    private message: NzMessageService,
    ) { }
    getAll(){
      this.service.getAll().subscribe((res: any)=>{
         this.datas = res
      })
    }
  ngOnInit(): void {
    this.getAll()
  }

}

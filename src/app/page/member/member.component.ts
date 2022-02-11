import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { COL_DATA_TYPES, User } from 'src/app/model';
import {UsersService} from '../../auth/users.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
    private fb: FormBuilder
    ) { }
    getAll(){
      this.service.getAll().subscribe((res: any)=>{
         this.datas = res.list
      })
    }
    //action
      changeAction = false
      handleremove(id: any){
        try {
          this.service.remove(id).subscribe((res: any) => {
            this.message.success("Thành công")
            return this.getAll()
          })
        } catch (error) {
          this.message.error("Thất Bại")
        }
      }
  
      handleChange(data:any){
        this.data = data
        this.changeAction = true
        this.validateForm = this.fb.group({
          name: [this.data.name, [Validators.required]],
          phone: [this.data.phone, [Validators.required]],
          role: [this.data.role, [Validators.required]]
        });
        this.showModal()
      }
      //handledata
      data: User = {
        _id: undefined,
        name: '',
        email: '',
        phone: 0,
        role: ''
      }
      validateForm!: FormGroup;
      submitForm(): void {
        if (this.validateForm.valid) {
          try {
            this.service.change( this.data._id, this.validateForm.value).subscribe((res:any)=>{
              this.message.success('Thành công')  
              this.handleCancel()
              this.getAll()
            })
          } catch (error) {
          }
        } else {
          Object.values(this.validateForm.controls).forEach(control => {
            if (control.invalid) {
              control.markAsDirty();
              control.updateValueAndValidity({ onlySelf: true });
            }
          });
        }
      }



    ///modal
    isVisible = false;
  showModal(): void {
    this.isVisible = true;
  }
  handleCancel(): void {
    this.isVisible = false;
    this.changeAction = false
  }
  ngOnInit(): void {
      this.getAll()
 
  }
}

import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProjectService } from 'src/app/auth/project.service';
import { COL_DATA_TYPES, IProduct } from 'src/app/model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datas: IProduct[] = [];
  item!: IProduct
  isVisible = false;
  title = 'project'
  COL_DATA_TYPE = COL_DATA_TYPES;
  id!: number
  type = false
  validateForm!: FormGroup;
  constructor(private projectService: ProjectService,
    private message: NzMessageService,
    private fb: FormBuilder
  ) { }

  getAll() {
    this.projectService.getAll().subscribe((res: any) => {
      this.datas = res.list
    })
  }
  showModal(): void {
    this.isVisible = true;
  }
  handleChangeModal(id: any) {
    this.item = id
    this.showModal()
    this.type = true
  }
  remove(id: any) {
    try {
      this.projectService.remove(id).subscribe((res: any) => {
        this.message.success("Thành công")
        return this.getAll()
      })
    } catch (error) {
      this.message.error("Thất Bại")
    }
  }
  handleCancel(): void {
    this.isVisible = false;

  }
  //form
  submitForm(): void {
    if (this.validateForm.valid) {
      try {
        if (this.type) {
          this.projectService.update(this.validateForm.value, this.item._id).subscribe((res:any)=>{
            this.message.success("Thành công")
            this.handleCancel()
            this.validateForm.reset()
            return this.getAll()
          })
        } else {
          const zz = {
            ...this.validateForm.value,
            spent: 0
          }
          this.projectService.add(zz).subscribe((res: any) => {
            this.message.success("Thành công")
            this.handleCancel()
            this.validateForm.reset()
            return this.getAll()
          })
        }
      
      } catch (error) {
        this.message.error("Thất bại")
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
  ngOnInit(): void {
    this.getAll();
    if (this.type) {
      this.validateForm = this.fb.group({
        name: [this.item.name, [Validators.required]],
        cost:[this.item.cost, [Validators.required]]
      })
    } else {
      this.validateForm = this.fb.group({
        name: [null, [Validators.required]],
        cost: [null, [Validators.required]]
      })
    }
    // this.validateForm = this.fb.group({
    //   name: [this.type ? this.item.name :null, [Validators.required]],
    //   cost: [this.type ? this.item.cost :null, [Validators.required]]
    // })
  }

}

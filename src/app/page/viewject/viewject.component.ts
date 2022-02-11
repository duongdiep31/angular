import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AreaService } from 'src/app/auth/area.service';
import { ProjectService } from 'src/app/auth/project.service';
import { Area, IProduct, People, User } from 'src/app/model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PeopleService } from 'src/app/auth/people.service';
import { UsersService } from 'src/app/auth/users.service';
@Component({
  selector: 'app-viewject',
  templateUrl: './viewject.component.html',
  styleUrls: ['./viewject.component.css']
})
export class ViewjectComponent implements OnInit {
  type = false
  viewAction = false
  dataView!:Area
  formAction = false
  taskAction = false
  users: User[] = []
  idView = ''
  addPeopleAction = false
  length = 0
  dataPeople: People[] = []
  id = this.route.snapshot.params['_id']
  item: IProduct = {
    _id: 0,
    name: '',
    cost: 0,
    spent: 0
  }
  areaItem: Area = {
    _id: 0,
    name: '',
    idProject: undefined
  }
  title = 'viewProject'
  listArea: Area[] = []
  constructor(private route: ActivatedRoute, private area: AreaService, private projectService: ProjectService,
    private message: NzMessageService,
    private fb: FormBuilder,
    private peopleService: PeopleService,
    private userService: UsersService
  ) { }
  find() {
    this.projectService.find(this.route.snapshot.params['_id']).subscribe((zz: any) => {
      this.item = zz
    })
  }
  getAll() {
    this.area.getAll().subscribe((res: any) => {
      this.listArea = res.list
    })
  }
  getAllUser(){
    this.userService.getAll().subscribe((res:any)=>{
      this.users = res.list      
  })
  }
  remove(id: any) {
    try {
      this.area.remove(id).subscribe((res: any) => {
        this.message.success("Thành công")
        return this.getAll()
      })
    } catch (error) {
      this.message.error("Thất Bại")
    }
  }
  handleChangeModal(item: any) {
    this.areaItem = item
    this.showModal()
    this.type = true
  }
  handleView(view: any) {
    this.viewAction = true
    this.idView = view._id
      this.dataPeoples()
  }
  dataPeoples(){
    this.peopleService.find(this.idView).subscribe((res:any)=>{
      console.log(res);
      
      this.length = res.total
      this.dataPeople = res.list
      this.showModal()
    })
  }
  /// modal
  isVisible = false;
  isConfirmLoading = false;
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }
  handleCancel(): void {
    this.addPeopleAction = false
    this.viewAction = false
    this.isVisible = false;
  
  }
  handleArea(){
    this.addPeopleAction = true
    this.showModal()
  }
  ///form
  validateForm!: FormGroup;
  submitForm(): void {
    if (this.validateForm.valid) {
      const data = {
        idProject: this.id,
        ...this.validateForm.value
      }
      try {
        if (this.type) {
          this.area.update(data, this.areaItem._id).subscribe((res: any) => {
            this.message.success("Thành công")
            this.handleCancel()
            this.validateForm.reset()
            return this.getAll()
          })
        } else {

          this.area.add(data).subscribe((res: any) => {
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

  ///addPeople
  handleAddProple() {
    this.viewAction = false
    this.addPeopleAction = true
  }
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfTagOptions = [];
  formPeopleAdd!: FormGroup
  submitPeople():void {
    if (this.formPeopleAdd.valid) {
          const data = {
            idArea: this.idView,
            ...this.formPeopleAdd.value
          }
            try {
              this.peopleService.add(data).subscribe((res: any)=>{
                  this.addPeopleAction = false
                  this.viewAction = true
                  this.dataPeoples()               
              })
            } catch (error) {
              
            }          
    } else {
      Object.values(this.formPeopleAdd.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
        
  }
  removePeople(data: any){
      this.peopleService.remove(data).subscribe((res: any) => {
        this.dataPeoples()
      })
    
  }

  ngOnInit(): void {
    this.find()
    this.getAll()
    this.getAllUser()
    // if (this.type) {
    //   this.validateForm.setValue({
    //     name: [this.item.name, [Validators.required]],
    //   })
    // } else {
    //   this.validateForm = this.fb.group({
    //     name: [null, [Validators.required]],
    //   })
    // }
    this.validateForm = this.fb.group({
      name: [this.type ? this.areaItem.name : null, [Validators.required]],
    })
    this.formPeopleAdd = this.fb.group({
      idUser: [null, [Validators.required]]
      })
    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }

}

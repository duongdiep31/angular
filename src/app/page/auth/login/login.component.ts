import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;
  submitForm(): void {  
    if (this.validateForm.valid) {

        this.auth.login(this.validateForm.value).subscribe(
          (res: any) => {
            if(res){
                if(res.token){
                    localStorage.setItem('currentUser',JSON.stringify({
                      token: res.token,
                      user: res.user
                    }));
                    if(res.users.role === 'manager'){

                        this.router.navigate(['/']);
                    }else{
                        this.router.navigate(['/member']);
                    }
                    this.messenger.success(res.msg)
                }else{
                  console.log("No Token");
                }
            } 
          },
          (error)=>{
              this.messenger.error(error.error.msg)
          }
        )
  
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private messenger: NzMessageService
    ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}

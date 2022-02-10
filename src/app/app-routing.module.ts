import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';
import { ScreensComponent } from './layout/screens/screens.component';
import { LoginComponent } from './page/auth/login/login.component';
import { RegisterComponent } from './page/auth/register/register.component';
import { HomeComponent } from './page/home/home.component';
import { MemberComponent } from './page/member/member.component';
import { ViewjectComponent } from './page/viewject/viewject.component';

const routes: Routes = [
  {path: '', component: ScreensComponent, children: [
    {path: '', component: HomeComponent},
    {path:'member', component: MemberComponent},
    {path :'view/:_id', component: ViewjectComponent}
  ]},
  {path: '', component: AuthComponent,
  children: [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.css']
})
export class ScreensComponent implements OnInit {
  isCollapsed = false;
  constructor(private router:Router) { }
    logout(){
        localStorage.removeItem('currentUser')      
        this.router.navigate(['/login'])
    }

  ngOnInit(): void {
  }
}

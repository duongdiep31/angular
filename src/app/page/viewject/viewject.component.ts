import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/auth/project.service';
import { IProduct } from 'src/app/model';

@Component({
  selector: 'app-viewject',
  templateUrl: './viewject.component.html',
  styleUrls: ['./viewject.component.css']
})
export class ViewjectComponent implements OnInit {
  item!:{cost: number,name:string,spent:number}
  constructor(private route:ActivatedRoute, private projectService: ProjectService) { }
  find(){
    this.projectService.find(this.route.snapshot.params['id']).subscribe((zz:any)=>{
        this.item = zz            
    })
  }
  ngOnInit(): void {
    this.find()
  }

}

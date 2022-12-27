import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  allUsers:any[]=[]
  constructor(private api:ApiService){}
  ngOnInit():void{
    this.api.viewContact().subscribe((data:any)=>{
      this.allUsers=data.users
      console.log(this.allUsers);
      
    })
  }

}

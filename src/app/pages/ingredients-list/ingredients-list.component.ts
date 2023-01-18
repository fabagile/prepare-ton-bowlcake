import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit {

  constructor(private router:Router, route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onAdd(){
    this.router.navigateByUrl("/ingredients/add")
  }
  onHandle(id:number){
    this.router.navigateByUrl("/ingredients/handle/"+id)
    // this.router.navigateByUrl("/ingredients/handle/1")
  }

}

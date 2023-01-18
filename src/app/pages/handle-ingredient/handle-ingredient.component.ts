import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-handle-ingredient',
  templateUrl: './handle-ingredient.component.html',
  styleUrls: ['./handle-ingredient.component.scss']
})
export class HandleIngredientComponent implements OnInit {
  id!:string
  constructor(private route:ActivatedRoute, ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
  }

}

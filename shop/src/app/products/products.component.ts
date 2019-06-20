import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  categories$;

  constructor(catagoryService: CategoryService) {
    this.categories$=catagoryService.getCategories;
   }

 

}

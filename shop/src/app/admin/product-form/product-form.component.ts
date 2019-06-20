import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductserviceService } from 'src/app/productservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;

  constructor( private router : Router,
    private cat : CategoryService,
    private catagoryService: CategoryService, 
    private productService: ProductserviceService) {
    this.categories$=catagoryService.getCategories;
   }


   save(product){
    this.productService.create(product);
     console.log(product);
     this.router.navigate(['/admin/products']);
   }
  ngOnInit() {
  }

}

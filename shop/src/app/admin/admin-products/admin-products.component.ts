import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { ProductserviceService } from 'src/app/productservice.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  product$ ;

  constructor(private prod: ProductserviceService) { 


    this.product$=this.prod.getAll();
    console.log(this.product$);
  }

  ngOnInit() {
  }

}

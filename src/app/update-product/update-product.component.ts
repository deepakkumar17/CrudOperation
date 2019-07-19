import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id: number = 5;
  confirmationUpdated: string = "Product has been successfully updated.";
  isUpdated: boolean = false;
  data = {
    id: '',
    title: '',
    code: ''
  };
  products: any;
  productObj: any;
  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  updateProduct(productData){
    this.productObj = {
      // "id": productData.id,
      "title": productData.title,
      "code": productData.code
    };
    this.http.put('http://localhost:4300/data' + '/' + this.id, productData)
    .subscribe((resp) =>{
      this.isUpdated = true;
    }); 
  }

  ngOnInit() {
   this.route.params.subscribe(params => {
     this.id = +params['id'];
   });
    this.http.get("http://localhost:4300/data")
    .subscribe((resp) =>{
      this.products = resp;
      for(var i = 0; i < this.products.length; i++){
        if(parseInt(this.products[i].id) === this.id){
            this.data = this.products[i]; 
            break;
        }
      }
    })
  }

}

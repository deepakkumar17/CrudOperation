import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productObj: any;
  confirmationString : string = "New product has been successfully added."
  isAdded: boolean = false;
  constructor(private http: HttpClient) { }

  addNewProduct(productData){
    this.productObj = {
      'id': productData.id,
      'title': productData.title,
      'code': productData.code
    }
    this.http.post("http://localhost:4300/data", this.productObj)
    .subscribe((resp) =>{
      console.log("resp ",resp);
      this.isAdded = true;
    })
    
  }
  ngOnInit() {
  }

}

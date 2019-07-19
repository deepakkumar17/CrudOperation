import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  product = [];
  fetchData= function(){
    this.http.get("http://localhost:4300/data")
    .subscribe((res) =>{
      this.product = res;
      console.log("print data : ", this.product);
    })
  }

  deleteProduct(prdt){
    if(confirm('Are you sure you want to delete?')){
    console.log("prdt ",prdt);
    this.http.delete('http://localhost:4300/data' + '/' + prdt)
    .subscribe((resp) =>{
      console.log("delete response ", resp);
      this.fetchData();
    })
  }
  }
  ngOnInit() {
    this.fetchData();
  }

}

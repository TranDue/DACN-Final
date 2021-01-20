import { HttpClient } from '@angular/common/http';
import { ProductDetailss } from './product-detailss.model';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductDetailssService {

  formData: ProductDetailss
  list : ProductDetailss[];
  readonly rootURL ="http://localhost:7741/api"

  constructor(private http: HttpClient) { }

  postEmployee(formData : ProductDetailss){
    return this.http.post(this.rootURL+'/Account',formData);

   }
   refreshList(){
    this.http.get(this.rootURL+'/Account')
    .toPromise().then(res => this.list = res as ProductDetailss[]);
  }

  putEmployee(formData : ProductDetailss){
    return this.http.put(this.rootURL+'/Account/'+formData.id,formData);

   }

   deleteEmployee(id : number){
    return this.http.delete(this.rootURL+'/Account/'+id);
   }
}

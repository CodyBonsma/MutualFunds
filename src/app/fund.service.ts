import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fund } from './fund/fund.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FundService {

  constructor(private http: HttpClient) { }

  // add material form 

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', Validators.required),
    ticker: new FormControl('', Validators.required),
    assetClass: new FormControl(''),
    expenseRatio: new FormControl(''),
    price: new FormControl(''),
    YTD: new FormControl(''),
  });

  getFunds(): Observable<any>{
    return this.http.get("http://localhost:8082/api/funds");
  }

  getFund(id: number){
    return this.http.get('http://localhost:8082/api/funds/' + id);
  }

  updateFund(fund: Fund): Observable<any> {
    return this.http.patch(`http://localhost:8082/api/funds/${fund.id}`, fund);
  }

  addFund(data: Fund) {
    console.log("data used to create new fund:", data)
    return this.http.post('http://localhost:8082/api/funds/', data);
  }

  deleteFund(id: number){
    console.log("REACHED THE SERVICE DEL")
    return this.http.delete(`http://localhost:8082/api/funds/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { TenantDetails } from '../dtos/tenant-details';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TenantServiceService {

  constructor(private httpClient: HttpClient) { }

  // getTenantData (): TenantDetails[]{
  //   return [new TenantDetails("Avneesh", 101, "abc@gmail.com")];
  // }

  getAllTenants (): Observable<TenantDetails[]>  {
    return this.httpClient.get<TenantDetails[]>("http://localhost:8080/api/tenancy/getAllTenants");
  }
}

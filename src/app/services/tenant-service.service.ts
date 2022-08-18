import { Injectable } from '@angular/core';
import { TenantDetails } from '../dtos/tenant-details';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TenantServiceService {

  private httpBaseUrl: string = "http://192.168.1.171:8080/api/tenancy/";

  constructor(private httpClient: HttpClient) { }

  getAllTenants (): Observable<TenantDetails[]>  {
    return this.httpClient.get<TenantDetails[]>(this.httpBaseUrl+"getAllTenants");
  }

  addNewTenant (tenant: TenantDetails) {
    this.httpClient.post(this.httpBaseUrl+"createTenant", tenant);
  }

  deleteTenant (tenant: TenantDetails) {
    console.log("delete method of service called for tenant: "+ tenant)
    var url = this.httpBaseUrl+"deleteTenant/"+tenant.id;
    console.log("Url used for delete method: "+url)
    this.httpClient.delete(url).subscribe();
    console.log("deleted successfully");
  }

}

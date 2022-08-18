import { Component, OnInit } from '@angular/core';
import { TenantDetails } from 'src/app/dtos/tenant-details';
import { TenantServiceService } from 'src/app/services/tenant-service.service';
import { FormControl, FormControlName, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tenant-dashboard',
  templateUrl: './tenant-dashboard.component.html',
  styleUrls: ['./tenant-dashboard.component.css']
})
export class TenantDashboardComponent implements OnInit {

  constructor(private tenantServcie :TenantServiceService) { }

  ngOnInit(): void {
    this.tenantServcie.getAllTenants().subscribe(data=> {
      this.tenants = data;
    });
    this.prepareFormGroup();
  }

  tenants: TenantDetails []  = [];
  tenantFormGroup: FormGroup;
  

  prepareFormGroup() {
    this.tenantFormGroup = new FormGroup({
      name: new FormControl(),
      emailId: new FormControl(),
      permanentAddress: new FormControl(),
      startDateOfRenting: new FormControl(),
      endDateOfRenting: new FormControl(),
      currentlyRenting: new FormControl()
    });
  }

  deleteTenant(tenant: TenantDetails, index: number) {
    alert("delete tenant called " + tenant);
    console.log(tenant);
    this.tenantServcie.deleteTenant(tenant);
  }

  addNewTenant(formData: any) {
    console.log("add new tenant method called", formData.value.name);
  }



}

import { Component, OnInit } from '@angular/core';
import { TenantDetails } from 'src/app/dtos/tenant-details';
import { TenantServiceService } from 'src/app/services/tenant-service.service';

@Component({
  selector: 'app-tenant-dashboard',
  templateUrl: './tenant-dashboard.component.html',
  styleUrls: ['./tenant-dashboard.component.css']
})
export class TenantDashboardComponent implements OnInit {

  constructor(private tenantServcie :TenantServiceService) { }

  ngOnInit(): void {
    this.tenants = this.tenantServcie.get
  }

  tenants: TenantDetails []  = [];



}

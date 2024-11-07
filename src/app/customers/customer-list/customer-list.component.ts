import { Component } from '@angular/core';
import { Customer, CustomersService } from '../customers.service';
import { CustomerListItemComponent } from "../customer-list-item/customer-list-item.component";

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CustomerListItemComponent],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css',
})
export class CustomerListComponent {
  constructor(private service: CustomersService) {}

  get customers(): Customer[] {
    return this.service.getCustomers();
  }
}

import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Customer, CustomersService } from '../customers.service';

@Component({
  selector: 'app-view-customer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view-customer.component.html',
  styleUrl: './view-customer.component.css',
})
export class ViewCustomerComponent {
  id!: string;
  constructor(
    private activeRoute: ActivatedRoute,
    private service: CustomersService
  ) {
    this.id = this.activeRoute.snapshot.params['id'];
  }

  get customerDetails() {
    const customers: Customer[] = this.service.getCustomers();
    return customers.find((customer) => customer.id === this.id);
  }
}

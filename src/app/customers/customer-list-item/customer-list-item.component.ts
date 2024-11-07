import { Component, Input } from '@angular/core';
import { type Customer } from '../customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list-item',
  standalone: true,
  imports: [],
  templateUrl: './customer-list-item.component.html',
  styleUrl: './customer-list-item.component.css',
})
export class CustomerListItemComponent {
  @Input({
    required: true,
  })
  customer!: Customer;

  constructor(private route: Router) {}

  handleClick() {
    this.route.navigate(['home/view/' + this.customer.id]);
  }
}

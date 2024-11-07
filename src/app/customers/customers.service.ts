import { Injectable } from '@angular/core';

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private customers: Customer[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'johndoe@email.com',
      phone: '1234567890',
      address: '123 Main St, City, State 12345',
    },
  ];

  getCustomers() {
    return this.customers;
  }

  addCustomer({ name, email, phone, address }: Customer) {
    const id = (this.customers.length + 1).toString();
    const newCustomer = { id, name, email, phone, address };
    const updatedCustomers = [...this.customers, newCustomer];
    this.customers = updatedCustomers;
  }

  editCustomer({ id, name, email, phone, address }: Customer) {
    const updatedCustomers = this.customers.map((customer) => {
      if (customer.id === id) {
        return { id, name, email, phone, address };
      }
      return customer;
    });
    this.customers = updatedCustomers;
  }

  deleteCustomer(id: string) {
    const updatedCustomers = this.customers.filter(
      (customer) => customer.id !== id
    );
    this.customers = updatedCustomers;
  }
}

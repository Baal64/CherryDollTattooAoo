import { Component, OnInit } from '@angular/core';
import { Router }            from "@angular/router";
import { FormBuilder }       from '@angular/forms';
import { ClientService }     from '../../services/client.service';
import { ListeClient }       from '../liste-clients/liste-clients.interface';


@Component({
  selector: 'app-suppression-client',
  templateUrl: './suppression-client.component.html',
  styleUrls: ['./suppression-client.component.css']
})
export class SuppressionClientComponent implements OnInit {
  customers: ListeClient[];   // Initialization of the customers variable which will contain the list of customers

  constructor(private clientService: ClientService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.clientService
    .getCustomers()  // Get the list of customers
    .subscribe((data: ListeClient[]) => { // Past customers in variable
      this.customers = data;
    });
  }

  deleteCustomer(id_client: number) { // Method for deleting data from "clientService" service
    this.clientService.
    deleteCustomer(id_client);
  }
}
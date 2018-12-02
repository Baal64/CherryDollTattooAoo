import { Component, OnInit } from '@angular/core';
import { ClientService }     from '../../services/client.service';
import { ListeClient }       from '../liste-clients/liste-clients.interface';
import { Router }            from "@angular/router";


@Component({
  selector: 'app-liste-totale-clients',
  templateUrl: './liste-totale-clients.component.html',
  styleUrls: ['./liste-totale-clients.component.css']
})
export class ListeTotaleClientsComponent implements OnInit {
  customers: ListeClient[];    // Initialization of the customers variable which will contain the list of customers
  
  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
    this.clientService
    .getCustomers()  // Get the list of customers
    .subscribe((data: ListeClient[]) => { // Past customers in variable
      this.customers = data;
    });
  }
}

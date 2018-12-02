import { Component, OnInit }  from '@angular/core';
import { ClientService } from "../../services/client.service";
import { ListeClient } from '../../client/liste-clients/liste-clients.interface';
import { Router } from "@angular/router";
// import { CustomerModele } from "../modeles/customer.modele";
// import { FiltreNomPipe } from "./filtre-nom.pipe";

@Component({
  selector: 'app-projets-en-cours',
  templateUrl: './projets-en-cours.component.html',
  styleUrls: ['./projets-en-cours.component.css']
})
export class ProjetsEnCoursComponent implements OnInit {

  customers: ListeClient[];    // Initialization of the customers variable which will contain the list of customers
  nom:string;
  // customers:object;

  // constructor(private clientService: ClientService, private router: Router, private pipe:FiltreNomPipe) { }
  constructor(private clientService: ClientService, private router: Router ) { }

  ngOnInit() {
    return this.clientService
    .getCustomers()  // Get the list of customers
    .subscribe((data: ListeClient[]) => { // Past customers in variable
      this.customers = data;
        console.log(data[0].nom);
        console.log(this.customers[0].nom)
      });
  }

  // getClientActuel() {
  //   var client = this.customers[i];
  //   for (var i;
  //     i <= this.customers.length;
  //     i++
  //   ) {
  //     if (client.nom != null) {
  //       // this.customers = this.pipe.transform(this.clientService.listeClients, this.nom)[0];
  
  //     } else {
  //       client = null;
  //     }
  //   }
  // }

 

}

import { Component, OnInit }  from '@angular/core';
import { ClientService }      from '../../services/client.service';
import { ListeClient }        from '../liste-clients/liste-clients.interface';

@Component({
  selector: 'app-modification-client',
  templateUrl: './modification-client.component.html',
  styleUrls: ['./modification-client.component.css'],
})
export class ModificationClientComponent implements OnInit {

  customers: ListeClient[];   // Initialization of the customers variable which will contain the list of customers
  valeurNgIf = 0;
  idClient = null;
  sliceAction = 0;

    constructor(private clientService: ClientService) {
  }

  ngOnInit() {
    // this.valeurNgIf = 0;
    this.clientService
    .getCustomers()  // Get the list of customers
    .subscribe((data: ListeClient[]) => { // Past customers in variable
      this.customers = data;
    });
  }

  choisirId(idClient) {
    idClient = <HTMLInputElement>document.getElementById("idClientInput"); 
    idClient = parseInt(idClient.value);

    this.clientService
    .getCustomer(idClient)
    .subscribe((data: ListeClient[])=>{ // Past customer in variables customerId
      this.customers = data;
      this.sliceDate(data);
    })
    this.valeurNgIf = 1;
  }

  modifyCustomer(id_client: number, data: ListeClient) {
    console.log("id : ",this.customers[0].id_client, "data :",this.customers);
    data = this.customers[0];
    this.sliceDate(data);
    id_client= Number(this.customers[0].id_client);
    this.clientService
    .modifyCustomer(id_client, data)
  }

  sliceDate(newDate){
    newDate = this.customers[0].date;
    console.log(newDate);
    newDate = newDate.slice(0,10);
    this.customers[0].date = newDate;
    this.sliceAction = 1;
  }
}

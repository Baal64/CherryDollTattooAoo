import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';
import {ListeClient} from '../liste-clients/liste-clients.interface';
import {Router} from "@angular/router";

// import { OnDisableComponentService } from '../services/on-disable-component.service';


@Component({
  selector: 'app-identification-client',
  templateUrl: './identification-client.component.html',
  styleUrls: ['./identification-client.component.css']
})

export class IdentificationClientComponent implements OnInit {

  public shown = false;
  disabled: boolean = false;

  customers: ListeClient = {
    id_client: null,
    nom: '',
    prenom: '',
    adresse1: '',
    adresse2: '',
    ville: '',
    codePostal: null,
    mail: '',
    tel: null,
    date: null
  };

  // constructor(private clientService: ClientService, private router: Router, private onDisableComponentService: OnDisableComponentService) { }
 public constructor(private clientService: ClientService, private router: Router) { }


  ngOnInit() {
  }

  onDisableComponent(click) {
    this.disabled = true;
    document.getElementById('disableCssColor').classList.add('disabled');
  }
  // OnDisableComponentService(click) {
  //   this.onDisableComponentService.onDisableComponent(click);
  // }

  //Methods to send data to service "clientservice"
  createCustomer(data: ListeClient) { 
  console.log("click")
    this.clientService.createCustomer(data);
  }

  createCustomerContinue(data: ListeClient) {
  console.log("click")
    this.clientService.createCustomerContinue(data);
  }
}

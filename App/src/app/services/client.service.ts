import { Injectable }    from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router }        from '@angular/router';
import { map }           from 'rxjs/operators';

@Injectable()
export class ClientService {
  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) { }
  url = 'http://localhost:3000';
  
  // Method to get the customers list from database.
  getCustomers() {
    return this
      .http
      .get(`${this.url}/customers`);
  }

  // Method to get a customer by his Id.
  getCustomer(id_client: number){
    return this
    .http
    .get(`${this.url}/customers/`+ id_client);
  }


  // Methods to add a new customer into the database.
  createCustomer(data) {
    this.http.post(`${this.url}/customers`, data)
      .subscribe(
        res => {
          console.log(res);
          this.toastr.success('Votre client à été ajouté avec succès.', 'Success');
          this.router.navigateByUrl('/suivi-projet/nouveau-projet');
        },
        err => {
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }

  createCustomerContinue(data) {
    this.http.post(`${this.url}/customers`, data)
      .subscribe(
        res => {
          console.log(res);
          this.toastr.success('Votre client à été ajouté avec succès.', 'Success');
          this.router.navigateByUrl('/suivi-projet/nouveau-projet/informations');
        },
        err => {
          console.log('Error occured:' , err);
          this.toastr.error(err.message, 'Error occured');
        }
      );
  }

  // Method whose allow to delete a customer from the database list.
  deleteCustomer(id_client: number) {
    this.http.delete(`${this.url}/customers/`+ id_client)
    .subscribe(
      res => {
        console.log(res);
        this.toastr.success('Votre client à été supprimé avec succès.', 'Success');
        this.router.navigateByUrl('/suivi-projet/liste-totale-clients');
      },
      err => {
        console.log('Error occured:' , err);
        this.toastr.error(err.message, 'Error occured');
      }
    );
  }

  // Method whose allow to modify a customer in the database list.
  modifyCustomer(id_client: number, data) {
    this.http.put(`${this.url}/customers/`+ id_client, data)
    .subscribe(
      res => {
        console.log(res);
        this.toastr.success('Votre client à été modifié avec succès.', 'Success');
        this.router.navigateByUrl('/suivi-projet/liste-totale-clients');
      },
      err => {
        console.log('Error occured:' , err);
        this.toastr.error(err.message, 'Error occured');
      }
    );
  }
}
import { Injectable } from '@angular/core';
import { Router }     from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  user: boolean = false;

  constructor(private route: Router, private http: HttpClient) { }
  //
  setUser(bool) {
    this.user = bool;
    sessionStorage.setItem('user', bool.toString());
  }

  setId(bool, el){
    this[el] = bool;
    console.log(typeof(bool.toString()));
    sessionStorage.setItem(el, bool.toString());
  }

  // Get the user in the session storage
  getUser() {
      if(sessionStorage.getItem('user')){
        this.user = eval(sessionStorage.getItem('user'));
      }
  }

  deconnect(){
    this.user=false;
    sessionStorage.setItem('user', 'false');
  }
}

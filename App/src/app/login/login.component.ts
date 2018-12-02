import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { AuthService }       from './../services/auth.service';

@Component({
  selector   : 'app-login',
  templateUrl: './login.component.html',
  styleUrls  : ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user:object = {mailConnexion:"", mdpConnexion:""};

  constructor(private route: Router, public auth: AuthService) { }

  ngOnInit() {
    this.auth.deconnect();
    // console.log('Test ngOnInit')
  }

  testID() {
    console.log(this.user);
  }

  soumission(f) {
    if (f.value.mailConnexion && f.value.mdpConnexion) {
      // this.authService.setUser(true, f.value.mailConnexion);
      console.log("f.value = ", f.value);
      if ((f.value.mailConnexion == "Virgil@gmail.com") && (f.value.mdpConnexion == "mdp")) {
        this.connect();
        this.route.navigateByUrl("/suivi-projet");
      }
      else {
        alert("Au moins un champ n'est pas correct !");
      }
    }
    else {
      alert("Au moins un champ n'est pas rempli !");
    }
  }

  //méthode de connexion
  connect(){
    this.auth.setId(true, 'user');
  }
}

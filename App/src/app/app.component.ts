import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css'],
})
export class AppComponent {
  title:string = 'Cherry Doll Tatoo';
  
  constructor(private router:Router, public auth:AuthService){

    auth.getUser();
    if(!auth.user){
      this.router.navigateByUrl('/');
    }
  }
}

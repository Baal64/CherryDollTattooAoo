import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OnDisableComponentService {

  // public shown = false;
  disabled: boolean = false;
  
  constructor() { }

  onDisableComponent(click){
      this.disabled = true;
      document.getElementById('disableCssColor').classList.add('disabled');
  }
}

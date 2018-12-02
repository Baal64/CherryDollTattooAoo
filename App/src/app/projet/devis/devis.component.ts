import { Component, OnInit } from '@angular/core';
// import { OnDisableComponentService } from '../services/on-disable-component.service';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {

  public shown = false;
  disabled: boolean = false;

  // constructor(private onDisableComponentService: OnDisableComponentService) { }
  constructor() { }


  ngOnInit() {}

  onDisableComponent(click){
      this.disabled = true;
      document.getElementById('disableCssColor').classList.add('disabled');
  }
  // onDisableComponent(click) {}

}

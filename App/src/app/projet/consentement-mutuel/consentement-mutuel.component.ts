import { Component, OnInit, OnDestroy } from '@angular/core';
// import { OnDisableComponentService } from '../services/on-disable-component.service';

@Component({
  selector: 'app-consentement-mutuel',
  templateUrl: './consentement-mutuel.component.html',
  styleUrls: ['./consentement-mutuel.component.css']
})
export class ConsentementMutuelComponent implements OnInit {

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

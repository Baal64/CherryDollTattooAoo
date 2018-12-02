import { Component, OnInit } from '@angular/core';
import { Title }             from '@angular/platform-browser';
import {AuthService }        from '../services/auth.service';

@Component({
  selector   : 'app-header',
  templateUrl: './header.component.html',
  styleUrls  : ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  title: string;
  
  constructor(private titleService: Title, public auth: AuthService) {
    this.title = this.titleService.getTitle();
  }

    ngOnInit() {}
}

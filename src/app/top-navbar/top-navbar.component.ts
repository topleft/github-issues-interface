import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {

  links: any[] = [
    {text: 'Issues', path: '/issues'},
    {text: 'About', path: '/about'},
  ];

  constructor(private router: Router) {}

  ngOnInit() {
  }

}

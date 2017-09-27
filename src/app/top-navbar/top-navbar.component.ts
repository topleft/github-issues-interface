import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  links: any[] = [
    {text: 'Issues', path: '/issues'},
    {text: 'About', path: '/about'},
    {text: 'Login', path: '/login'}
  ];

  constructor(private router: Router) {}

  ngOnInit() {
  }



}

import { Component, OnInit } from '@angular/core';
import { GitAuthService } from '../git-auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private gitAuthService: GitAuthService) { }

  ngOnInit() {
  }

  handleClick(): void {
    this.gitAuthService.handleGithubOAuth()
    .then(console.log)
    .catch(console.error)
  }


}

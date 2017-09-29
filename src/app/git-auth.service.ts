import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class GitAuthService {

  constructor() { }

  handleGithubOAuth() {
    return new Promise((resolve, reject) => {
      axios.get('/auth/github')
      .then((result) => {
        console.log(result);
        localStorage.setItem('user', result.data.user);
        resolve('good');
      })
      .catch((err) => {
        console.error(err);
        resolve(err);
      });
    })
  }

}

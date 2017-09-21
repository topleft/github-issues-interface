# Git Issues Interface

### To Run Locally

#### Optional Github Token

This step is optional, but you may exceed your Github API request limit. To get expanded access, you will need a Github access token. Otherwise, proceed to the _Local Setup_ steps.

1. log into github
1. go [https://github.com/settings/tokens](https://github.com/settings/tokens)
1. click 'Generate new token'
1. give the token a name, and select repo access
1. copy and paste this token and keep it somewhere safe
1. you now have expanded access to the github api (we will use the increased rate limit)
1. add this code to the new file:
```
export const secrets = {
  username: <your username>,
  password: <your token>
}
```
> heads up: its Javascript (not env vars), so these variable need to be strings

#### Local Setup

1. clone repo locally
1. `cd` into directory and run `npm install`
1. `touch ./src/app/secrets.ts`
1. now run `ng serve`
1. navigate to _localhost:4200/issues_

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

### Todo:

1. Add pagination
  - currently only the first 30 issues are coming back from github, allow pagination to see more issues
1. View issues from other repos
  - allow the repo owner to be an input and then repo name be a drop down

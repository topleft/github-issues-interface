import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {RoutingModule} from './routing/routing.module';

import { AppComponent } from './app.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { AboutComponent } from './about/about.component';
import { GitIssuesComponent } from './git-issues/git-issues.component';
import { IssueTileComponent } from './issue-tile/issue-tile.component';

import { GitIssuesService } from './git-issues.service';
import { GitAuthService } from './git-auth.service';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    AboutComponent,
    GitIssuesComponent,
    IssueTileComponent,
    SanitizeHtmlPipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [GitIssuesService, GitAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

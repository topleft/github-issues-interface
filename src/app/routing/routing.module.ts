import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { GitIssuesComponent } from '../git-issues/git-issues.component';
import { AboutComponent } from '../about/about.component';

const routes:Routes = [
  {
    path: '',
    children: [
       { path: 'issues', component: GitIssuesComponent },
       { path: 'about', component: AboutComponent }
    ]
  },
  { path: '**', redirectTo: '' }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  declarations: []
})
export class RoutingModule { }

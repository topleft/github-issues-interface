import { Component, OnInit } from '@angular/core';
import { IssueTileComponent } from '../issue-tile/issue-tile.component';
import { GitIssuesService } from '../git-issues.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-git-issues',
  templateUrl: './git-issues.component.html',
  styleUrls: ['./git-issues.component.scss']
})
export class GitIssuesComponent implements OnInit {

  filteredIssues: Issue[];
  currentFilter: any;
  repoOwner: string;
  repoName: string;
  fromDate: string;
  toDate: string;


  constructor(private gitIssuesService: GitIssuesService) { }

  ngOnInit() {
    this.repoOwner = 'angular';
    this.repoName = 'angular';
    this.repoName = 'angular';
    this.fromDate = new Date(Date.now() - (1000 * 60 * 60 * 24 * 7)).toISOString();
    this.toDate = new Date().toISOString();

    this.fetchIssues();
  }

  fetchIssues() {
    this.gitIssuesService.fetchIssues(this.repoOwner, this.repoName, this.fromDate)
    .then((issues) => {
      this.currentFilter = {name: null, color: null};
      this.filteredIssues = issues;
    })
    .catch((err) => {
      console.error(err)
      alert('Oops, we encountered an error getting the issues from Github.\n\nPlease refresh the page, thanks.')
    });
  }

  getFilteredIssues(): void {
    this.filteredIssues = this.gitIssuesService.getFilteredIssues();
  }

  refreshIssues() {
    this.filteredIssues = [];
    this.fetchIssues();
  }

  setFilter(filter): void {
    if (!filter) {
      filter = {name: null, color: null};
    }
    this.currentFilter = filter;
    this.gitIssuesService.setFilter(filter.name);
    this.getFilteredIssues()
  }

  toggleSelected(issueId: number): void {
    this.gitIssuesService.toggleSelected(issueId);
  }

  isSelected(issueId: number): boolean {
    const selectedIssueId = this.gitIssuesService.getSelected();
    return selectedIssueId === issueId;
  }

}

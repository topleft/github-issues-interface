import { Component, OnInit } from '@angular/core';
import { IssueTileComponent } from '../issue-tile/issue-tile.component';
import { GitIssuesService } from '../git-issues.service';
import { Issue } from '../issue';
import { formatHexColor } from '../ui-helpers'

@Component({
  selector: 'app-git-issues',
  templateUrl: './git-issues.component.html',
  styleUrls: ['./git-issues.component.scss']
})
export class GitIssuesComponent implements OnInit {

  issues: Issue[];
  currentFilter: any;

  constructor(private gitIssuesService: GitIssuesService) { }

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    this.gitIssuesService.fetchIssues('angular', 'angular')
    .then((issues) => {
      this.currentFilter = {name: null, color: null};
      this.issues = issues;
    })
    .catch(console.error)
  }

  getFilteredIssues(): void {
    this.issues = this.gitIssuesService.getFilteredIssues();
  }

  refreshIssues() {
    this.issues = [];
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

  formatHexColor(color: string): string {
    return formatHexColor(color);
  }

}

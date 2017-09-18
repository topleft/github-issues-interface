import { Injectable } from '@angular/core';
import { Issue } from './issue';
import { formatIssuesData, formatDateToUTC, secretCheck } from './helpers'
import axios from 'axios';

const secrets = secretCheck();

const GITHUB_API_BASE_URL = 'https://api.github.com/repos'

@Injectable()
export class GitIssuesService {
  issues: Issue[] = [];
  selectedIssueId: number;
  filterText: string;

  fetchIssues( repoOwner: string, repoName: string, fromDate?: string ): Promise<any> {

    const formattedFromDate = formatDateToUTC(fromDate)
    const url = `${GITHUB_API_BASE_URL}/${repoOwner}/${repoName}/issues?since=${formattedFromDate}&direction=desc`
    let options = {};
    if (secrets) options = {auth: secrets};

    return new Promise((resolve, reject) => {
      axios.get(url, options)
      .then((results) => {
        const formattedResults = formatIssuesData(results.data);
        this.issues = formattedResults;
        resolve(formattedResults);
      })
      .catch((err) => {
        reject(err)
      });
    });

  }

  getFilteredIssues(): Issue[] {

    if (this.filterText) {
      return this.issues.filter((issue) => {
        return issue.labels.some((l) => l.name === this.filterText);
      })
    } else {
      return this.issues;
    }

  }

  getSelected(): number {

    return this.selectedIssueId;

  }

  toggleSelected(issueId): void {

    this.selectedIssueId = this.selectedIssueId === issueId ? null : issueId;

  }

  setFilter(filterText): void {

    this.filterText = filterText;

  }

}

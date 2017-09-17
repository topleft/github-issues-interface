import { Injectable } from '@angular/core';
import { Issue } from './issue';
import axios from 'axios';
let moment = require('moment-timezone');

const GITHUB_API_BASE_URL = 'https://api.github.com/repos'

@Injectable()
export class GitIssuesService {
  issues: Issue[] = [];
  selectedIssueId: number;
  filterText: string;

  fetchIssues( repoOwner: string, repoName: string, fromDate?: string ): Promise<any> {

    const formattedFromDate = formatDateToUTC(fromDate)
    const url = `${GITHUB_API_BASE_URL}/${repoOwner}/${repoName}/issues?since=${formattedFromDate}&direction=desc`

    return new Promise((resolve, reject) => {
      axios.get(url, {
        auth: {
          username: 'topleft',
          password: '59fbab0bcc0c1f7cbe644150b5ea8752536bfaf9'
        }
      })
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

function formatDateToUTC(dateString: string, format: string = 'YYYY-MM-DDTHH:MM:ss'): string {
  const date = dateString || moment().subtract(7, 'days');
  const formattedDate = moment.tz(date, 'UTC').format(format)
  return formattedDate;
}


function formatIssuesData(data: Object[]): Issue[] {
  const issues = data.map((issue) => new Issue(issue));
  return issues;
}

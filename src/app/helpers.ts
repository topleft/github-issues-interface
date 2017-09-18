let moment = require('moment-timezone');
import { Issue } from './issue';

function formatDateToUTC(dateString?: string, format: string = 'YYYY-MM-DDTHH:MM:ss'): string {
  const date = dateString || moment().subtract(7, 'days');
  const formattedDate = moment.tz(date, 'UTC').format(format)
  return formattedDate;
}

function formatIssuesData(data: Object[]): Issue[] {
  const issues = data.map((issue) => new Issue(issue));
  return issues;
}

function getDateOneWeekAgo() {
  return moment().subtract(7, 'days').toDate();
}

function secretCheck() {
  try {
    return require('./secrets').secrets;
  } catch(e) {
    console.warn('You have not configured a github access token.\nAccess to github data will be limited.\nPlease see the readme for more info: https://github.com/topleft/github-issues-interface')
    return;
  }
}

export {
  formatDateToUTC,
  formatIssuesData,
  getDateOneWeekAgo,
  secretCheck,
}

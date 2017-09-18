import { Label } from './label'

export class Issue {

  id: number;
  title: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  reporter: string;
  reporterProfile: string;
  assignee?: string;
  assigneeProfile?: string;
  labels: Label[];
  body: string;

  constructor(data) {
    this.id = data.id
    this.title = data.title;
    this.createdAt = data.created_at;
    this.updatedAt = data.updated_at;
    this.reporter = data.user.login;
    this.reporterProfile = data.user.html_url;
    this.assignee = data.assignee && data.assignee.login ? data.assignee.login : null;
    this.assigneeProfile = data.assignee && data.assignee.html_url ? data.assignee.html_url : null;
    this.url = data.html_url;
    this.labels = data.labels.map((l) => new Label(l));
    this.body = data.body;
  }
}

export class Label {
  id: number;
  url: string;
  name: string;
  color: string;

  constructor(data) {
    this.id = data.id;
    this.url = data.url;
    this.name = data.name;
    this.color = `#${data.color}`;
  }
}

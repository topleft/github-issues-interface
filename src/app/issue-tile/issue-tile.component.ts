import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Issue } from '../issue';
import { Label } from '../label';
import { formatHexColor } from '../ui-helpers';

@Component({
  selector: 'issue-tile',
  templateUrl: './issue-tile.component.html',
  styleUrls: ['./issue-tile.component.scss']
})

export class IssueTileComponent implements OnInit {
  @Input() issue: Issue;
  @Input() isLast: boolean = true; // default will be true so tile can be used on its own
  @Input() isSelected: boolean;
  @Output() filter: EventEmitter<Label> = new EventEmitter<Label>();

  constructor() {
  }

  formatHexColor(color) {
    return formatHexColor(color);
  }

  ngOnInit() {
  }

  handleFilterClick(filter) {
    this.filter.emit(filter);
  }

}

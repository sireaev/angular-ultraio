import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html',
  styleUrls: ['./giphy-search.component.scss']
})
export class GiphySearchComponent {
  searchKeywords: Event | undefined;
  @Output() keywordChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchTrigger: EventEmitter<void> = new EventEmitter<void>();

  keys = [];
  constructor() {}
}

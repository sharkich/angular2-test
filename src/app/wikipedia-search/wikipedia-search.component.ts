import { Component } from '@angular/core';

import { WikipediaSearchService } from './wikipedia-search.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-wikipedia-search',
  templateUrl: './wikipedia-search.component.html',
  styleUrls: ['./wikipedia-search.component.css']
})
export class WikipediaSearchComponent {

  searchString: string = '';
  searchResults: Array<string> = [];

  constructor(private wikiService: WikipediaSearchService) { }

  search() {
    this.wikiService.search(this.searchString)
      .subscribe(results => this.searchResults = results);
  }

}

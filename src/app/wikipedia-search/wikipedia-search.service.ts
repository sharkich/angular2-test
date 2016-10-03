import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';

const WIKIPEDIA_URL = 'http://en.wikipedia.org/w/api.php';

@Injectable()
export class WikipediaSearchService {

  constructor(private jsonp: Jsonp) { }

  search(term: string) {
    let urlParams = new URLSearchParams();
    urlParams.set('search', term);
    // urlParams.set('rawcontinue', 'true');
    urlParams.set('action', 'opensearch');
    urlParams.set('format', 'json');
    // urlParams.set('prop', 'extracts');
    urlParams.set('callback', 'JSON_CALLBACK');
    let JSON_CALLBACK = (data) => {
      console.log('JSON_CALLBACK', data);
    };
    return this.jsonp.get(WIKIPEDIA_URL, {search: urlParams})
      .map(response => {
        console.log(response);
        return response.json()[1];
      });
    // return this.jsonp.get(WIKIPEDIA_URL, urlParams)
    //   .map(response => response.json()[1]);
  }

}


// import {Http} from '@angular/http';
// import {Injectable} from '@angular/core';
// import {Observable} from 'rxjs';
// import 'rxjs/add/operator/map'
//
// @Injectable()
// export class SearchWiki {
//   constructor (private http: Http) {}
//
//   search(term: string): Observable<any> {
//     return this.http.get(
//       'https://en.wikipedia.org/w/api.php?' +
//       'action=query&list=search&srsearch=' + term
//     ).map((response) => response.json());
//   }
//
//   searchXML(term: string): Observable<any> {
//     return this.http.get(
//       'https://en.wikipedia.org/w/api.php?' +
//       'action=query&list=search&format=xmlfm&srsearch=' + term
//     );
//   }
// }

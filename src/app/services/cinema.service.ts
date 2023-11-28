import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { parseString } from 'xml2js';



@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  url: string;
  newsCount: number = 0;

  constructor(private httpClient: HttpClient) {
    this.url = "https://www.finnkino.fi/xml/News/";
  }



  getData(): Observable<any> {
    return this.httpClient.get(this.url, { responseType: 'text' }).pipe(map(response => {

      let newsData: any;

      parseString(response, { trim: true, explicitArray: false, mergeAttrs: true },
        function (err: any, result: any) {
          newsData = result.News.NewsArticle;
        })

      this.newsCount = newsData.lenght;
      return newsData;
    }));
  }

}




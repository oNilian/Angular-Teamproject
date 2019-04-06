import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseApiService {

  private baseURL: string = 'https://forverkliga.se/JavaScript/api/api-db.php?';
  private groupID: string = '&group=1av0E'; // Used for test create new for final.
  private dataArray = [];
  
  getData() {
    this.http.get(this.baseURL + 'whathaveidone' + this.groupID).subscribe((dataHandler: any) => {
      if (dataHandler.status === 'success') {
        dataHandler.data.forEach( (singleData: any) => {
          this.dataArray.push( JSON.parse(singleData.value) );
          console.log(typeof(this.dataArray));
        });
      } else { console.log('Database API Error!'); }
    });
    return this.dataArray;
  }
  setData(title: string, article: string, url: string): Observable<any> {
    const valueString = `{"title": "${title}", "article": "${article}", "link": "${url}", "rating": 0}`;
    const uniqueID =  Math.floor((Math.random() * 999999) + 1);

    this.http.get(this.baseURL + 'op=set' + this.groupID + '&key=' + uniqueID + '&value=' + valueString).subscribe();
    return;
  }
  delData(uniqueID: number) {
    return this.http.get(this.baseURL + 'op=remove' + this.groupID + '&key=' + uniqueID).subscribe();
  }

  constructor(private http: HttpClient) { }
}

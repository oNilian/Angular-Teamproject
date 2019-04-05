import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DatabaseApiService {

  private baseURL = 'https://forverkliga.se/JavaScript/api/api-db.php?';
  private groupID = '&group=YNeBZ'; // Used for test create new for final.
/*
Since key is used for delete it we cannot store ranking data there so maybe change to store it in the value object {..., rating: 0 }
https://forverkliga.se/JavaScript/api/api-db.php?op=set&group=YNeBZ&key=4123&value={title: 'Random wiki entry 1', article: 'long information about the entry', link: 'http://en.wikipedia.org/wiki/random', rating: 5}
https://forverkliga.se/JavaScript/api/api-db.php?op=set&group=YNeBZ&key=4523&value={title: 'Random wiki entry 2', article: 'long information about the entry', link: 'http://en.wikipedia.org/wiki/random', rating: 0}
https://forverkliga.se/JavaScript/api/api-db.php?op=set&group=YNeBZ&key=4534&value={title: 'Random wiki entry 3', article: 'long information about the entry', link: 'http://en.wikipedia.org/wiki/random', rating: 1}
https://forverkliga.se/JavaScript/api/api-db.php?op=set&group=YNeBZ&key=4143&value={title: 'Random wiki entry 4', article: 'long information about the entry', link: 'http://en.wikipedia.org/wiki/random', rating: 3}
https://forverkliga.se/JavaScript/api/api-db.php?op=set&group=YNeBZ&key=4123&value={title: 'Random wiki entry 5', article: 'long information about the entry', link: 'http://en.wikipedia.org/wiki/random', rating: 2}
https://forverkliga.se/JavaScript/api/api-db.php?op=set&group=YNeBZ&key=4324&value={title: 'Random wiki entry 6', article: 'long information about the entry', link: 'http://en.wikipedia.org/wiki/random', rating: 3}
https://forverkliga.se/JavaScript/api/api-db.php?op=set&group=YNeBZ&key=6344&value={title: 'Random wiki entry 7', article: 'long information about the entry', link: 'http://en.wikipedia.org/wiki/random', rating: 4}
https://forverkliga.se/JavaScript/api/api-db.php?op=set&group=YNeBZ&key=8534&value={title: 'Random wiki entry 8', article: 'long information about the entry', link: 'http://en.wikipedia.org/wiki/random', rating: 1}
https://forverkliga.se/JavaScript/api/api-db.php?op=set&group=YNeBZ&key=9854&value={title: 'Random wiki entry 9', article: 'long information about the entry', link: 'http://en.wikipedia.org/wiki/random', rating: 5}
https://forverkliga.se/JavaScript/api/api-db.php?op=set&group=YNeBZ&key=6424&value={title: 'Random wiki entry 10', article: 'long information about the entry', link: 'http://en.wikipedia.org/wiki/random', rating: 2}
https://forverkliga.se/JavaScript/api/api-db.php?op=set&group=YNeBZ&key=6454&value={title: 'Random wiki entry 11', article: 'long information about the entry', link: 'http://en.wikipedia.org/wiki/random', rating: 0}
https://forverkliga.se/JavaScript/api/api-db.php?op=set&group=YNeBZ&key=9454&value={title: 'Random wiki entry 12', article: 'long information about the entry', link: 'http://en.wikipedia.org/wiki/random', rating: 3}
https://forverkliga.se/JavaScript/api/api-db.php?op=set&group=YNeBZ&key=7534&value={title: 'Random wiki entry 13', article: 'long information about the entry', link: 'http://en.wikipedia.org/wiki/random', rating: 5}
*/
  getData(): Observable<any> {
    console.log('getData');
    return this.http.get(this.baseURL + 'whathaveidone' + this.groupID);
  }
  setData(value: object, key: number = 0): Observable<any> {
    console.log('setData');
    return this.http.get(this.baseURL + 'op=set' + this.groupID + '&key=' + key + '&value=' + value);
  }
  delData() {
    console.log('delData');
    // Will not work...
    //return this.http.get(this.baseURL + 'op=remove' + this.groupID + '&key=' + key);
  }

  constructor(private http: HttpClient) { }
}

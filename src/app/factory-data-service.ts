import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class FactoryDataService {

  constructor(private http: HttpClient) {}

  getFactoryData(): Observable<any> {
    return this.http.get('./assets/backend/hallen.json');
  }
}

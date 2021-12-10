import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) {}

  getGitHubUser(userName) {
    return this._http.get(environment.apiHost + '/users/' + userName)
        .pipe(map(res => res));
  }

  getGitHubRepo(url, params) {

    if (params && params !== '') {
      url += '?' + params;
    }

    return this._http.get(url)
        .pipe(map(res => res));
  }

}

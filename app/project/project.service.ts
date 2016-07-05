import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

// import 'rxjs/add/operators/map'; // just get map

const URL_PROJECT = 'api/projects.json';

@Injectable()
export class ProjectService {
  constructor(private _http: Http) { }

  // This is Ward's preference, on Wednesdays
  getProjects() {
    return this._http.get(URL_PROJECT)
      .map((response: Response) => response.json())
      .toPromise()
      .catch((err: any) => {
        console.log(err); // again, customize me please
        return Promise.reject(err);
      });
  }

  getProjects_RxObservable() {
    return this._http.get(URL_PROJECT)
      .map((response: Response) => response.json())
      .catch(this._handlerError);
  }

  _handlerError(err: any) {
    console.log(err); // log this somewhere and format the message well for devs
    return Observable.throw(err); // our opportunity customize this error
  }
}

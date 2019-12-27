import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  httpMethods: string[];
  constructor() {
    this.httpMethods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTION'];
  }

  getHttpMethods() {
    return this.httpMethods;
  }
}

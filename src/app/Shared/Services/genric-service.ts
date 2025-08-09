import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, forkJoin, Observable, retry, switchMap, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenricService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client error: ${error.error.message}`;
    } else {
      errorMessage = `Server error (${error.status}): ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => errorMessage);
  }

  getAll(endPoint: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${endPoint}`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getById(endPoint: string, id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${endPoint}/${id}`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  getByAnyProperty(endPoint: string, anyThing: string, valueOfAnyThing: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${endPoint}?${anyThing}=${valueOfAnyThing}`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  post(endPoint: string, obj: any) {
    return this.httpClient.post(`${this.baseUrl}/${endPoint}`, obj).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  put(endPoint: string, obj: any, id: number) {
    return this.httpClient.put(`${this.baseUrl}/${endPoint}/${id}`, obj).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  deletebyAnyProperty(endPoint: string, anyThing: string, valueOfAnyThing: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${endPoint}?${anyThing}=${valueOfAnyThing}`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  deleteAllForUser(userId: number) {
    return this.httpClient.get<any[]>(`${this.baseUrl}/carts?userId=${userId}`).pipe(
      switchMap(carts => forkJoin(
        carts.map(cart => this.httpClient.delete(`${this.baseUrl}/carts/${cart.id}`))
      ))
    );
  }

  delete(endPoint: string, id: string) {
    return this.httpClient.delete(`${this.baseUrl}/${endPoint}/${id}`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
}

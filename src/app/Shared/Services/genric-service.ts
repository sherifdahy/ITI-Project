import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenricService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000";
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

  delete(endPoint: string, id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${endPoint}/${id}`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
}

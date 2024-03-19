/* eslint-disable @typescript-eslint/unbound-method */
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from './product';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private _apiUrl = 'https://dulces-petalos.herokuapp.com/api/product';

    constructor(private _http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        return this._http.get<Product[]>(this._apiUrl).pipe(catchError(this._handleError));
    }

    getProductById(id: string): Observable<Product> {
        return this._http.get<Product>(`${this._apiUrl}/${id}`).pipe(catchError(this._handleError));
    }

    private _handleError(error: HttpErrorResponse): Observable<never> {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }
}

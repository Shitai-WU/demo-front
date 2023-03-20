import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Contact, CreateContact } from '../models';
import { catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private baseUrl = '/api/contacts'

  constructor(private http: HttpClient) {
  }

  addContact(createContact: CreateContact): Observable<Contact> {
    return this.http.post<Contact>(this.baseUrl, createContact)
      .pipe(
        catchError((errorResponse: HttpErrorResponse) => this.handleError('add contact', errorResponse))
      );
  }

  updateContact(contact: Contact): Observable<Contact> {
    return this.http.put<Contact>(this.baseUrl, contact)
      .pipe(
        catchError((errorResponse: HttpErrorResponse) => this.handleError('update contact', errorResponse))
      );
  }

  loadContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl)
      .pipe(
        catchError((errorResponse: HttpErrorResponse) => this.handleError('load contacts', errorResponse))
      );
  }

  findContact(id: string): Observable<Contact> {
    return this.http.get<Contact>(`${this.baseUrl}/${id}`)
      .pipe(
        catchError((errorResponse: HttpErrorResponse) => this.handleError('find contact', errorResponse))
      );
  }

  deleteContact(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
      .pipe(
        catchError((errorResponse: HttpErrorResponse) => this.handleError('delete contact', errorResponse))
      );
  }

  private handleError(operation: string, error: HttpErrorResponse) {
    console.error(`Contact service returned error message: ${error.message} with code: ${error.status} when performing ${operation} operation`);
    return throwError(() => new Error(error.message));
  }
}

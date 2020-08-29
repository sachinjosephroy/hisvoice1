import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Contact } from './shared/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact> {
    return this.http.get<Contact>(`${this.apiUrl}?per_page=10`);
  }
}

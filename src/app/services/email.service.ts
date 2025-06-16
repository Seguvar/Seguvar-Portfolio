import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:8080/api'; // Spring Boot backend URL

  constructor(private http: HttpClient) {}

  sendEmail(emailData: EmailRequest): Observable<EmailResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    // Send raw emailData object without wrapping
    return this.http.post<EmailResponse>(`${this.apiUrl}/contact`, emailData, { headers });
  }
}
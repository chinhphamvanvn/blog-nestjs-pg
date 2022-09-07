import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { BackendService } from '../backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private backendService: BackendService) { }

  login(email: string, password: string) {
    const body = {email, password};
    return this.backendService.login(body).pipe(
      map((token) => {
        localStorage.setItem('blog-token', token.access_token);
        return token;
      })
    )
  }
}

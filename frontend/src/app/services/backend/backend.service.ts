import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { confEndpoints } from "../config/config.service";

@Injectable({
  providedIn: "root",
})
export class BackendService {
  constructor(private httpClient: HttpClient) {}


  public login(userLogin: any): Observable<any> {
    const endpoint = `${confEndpoints.bff}/${"api/users/login"}`;
    return this.httpClient.post<any>(endpoint, userLogin);
  }
}

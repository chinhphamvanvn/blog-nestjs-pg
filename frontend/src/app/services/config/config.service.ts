import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

export interface IConfEndpoints {
  bff?: string;
}

export let confEndpoints: IConfEndpoints = {};

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  constructor(private http: HttpClient) {
  }

  configUrl = `${environment.configFolder}assets/config/app.config.json`;

  public async load(): Promise<any> {
    return new Promise((resolve) => {
      this.http.get(this.configUrl).subscribe((response: any) => {
        confEndpoints = {
          bff: response.endpoints.bff,
        };
        resolve(true);
      });
    });
  }
}

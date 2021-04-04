import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalApiService } from './global-api.service';
import { authInterface } from '../interface/auth'
import store from "store"
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: authInterface;
  public apiToken :string= store.get("apiToken");
  constructor(
    private http : HttpClient,
    private apiService : GlobalApiService,
  ) { }
  
  public login(payload: FormData) {
    const url = this.apiService.getUrl("login");
    return this.http.post<authInterface>(url, payload);
  }
  public setuser(user: authInterface){
    this.user = user;
    this.apiToken = user.token;
    store.set("apiToken", user.token);
  }
}

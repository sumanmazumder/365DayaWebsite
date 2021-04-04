import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalApiService {
  public endPoint: string = "";
  constructor() { 
    this.setEndPoint();
  }
  setEndPoint(){
    const metEle: HTMLElement = document.querySelector('meta[name="api-end-point"]');
    if(metEle){
      this.endPoint = metEle.getAttribute('content');
    }
  }
  public getUrl(url:string): string{
    return `${this.endPoint}/${url}`;
  }
}
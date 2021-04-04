import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../service/auth.service';
export interface userInterface{
  email?: string;
  password?: string;
  type?:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild ("loginForm", {static:true})loginForms: ElementRef;
  // @ViewChild(compontName)variableName : typeOfVeriables
  public user : userInterface = {}
  constructor(
    private authService : AuthService,
    
  ) { }

  ngOnInit(): void {
    // this.logIn();
  }
  logIn(){
    console.log(this.getFromData());
    this.authService.login(this.getFromData()).subscribe(
      (user:any)=>{
        console.log(user);
        alert("success");
      },
      (error)=>{
        // this.errors = error;
        console.log(error);
        alert("error");
      }
    )
  }
  getFromData(){
    return new FormData(this.loginForms.nativeElement)
  }
}

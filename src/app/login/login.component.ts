import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  loginError:any = false;
  loginSuccess:any = false;

  onSubmit(data:any){
    console.log(data);
    this.http.post<any>('https://api.aydemir.ndepo.com/api/Auth/login',data).subscribe((data: any) => { console.log("Login",data); if(data?.success){this.loginSuccess=true; this.loginError=false; localStorage.setItem('token', data.data.token);window.location.pathname=""}},
    (error:any) => {
      this.loginError = true;
    })
  }

}

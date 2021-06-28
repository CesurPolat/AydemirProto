import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(data:any){
    this.http.post<any>('https://api.aydemir.ndepo.com/api/Auth/login',data).subscribe((data: any) => { console.log(data); if(data?.success){alert("Oldu");localStorage.setItem('token', data.data.token);window.location.pathname=""} if(data?.status==400)(alert("olmadı"))})
  }

}

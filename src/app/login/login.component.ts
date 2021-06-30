import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }




  ngOnInit(): void {
    /* this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe((resp: any) => {
      console.log('111 - fotolar', resp)
    })

    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((resp: any) => {
      console.log('222 - users', resp)
    })

    this.http.get('https://api.aydemir.ndepo.com/api/WorkOrders/getall').subscribe((resp: any) => {
      console.log('333 - işler', resp)
    }) */


    this.getResult('https://jsonplaceholder.typicode.com/photos');
    this.getResult('https://jsonplaceholder.typicode.com/users');
    
  }

  result:any;

  async getResult(url:any): Promise<any> {
    this.result = await this.http.get(url)
      .toPromise()
      .then(resp => {
        console.log(resp);
      });//Do you own cast here
    return this.result;
  }



  loginError: any = false;
  loginSuccess: any = false;






  onSubmit(data: any) {
    console.log(data);
    this.http.post<any>('https://api.aydemir.ndepo.com/api/Auth/login', data).subscribe((resp: any) => {

      console.log("Login", resp);
      if (resp?.success) {
        this.loginSuccess = true;
        this.loginError = false;
        localStorage.setItem('token', resp.data.token);
        window.location.pathname = ""
      }
    },


      (error: any) => {
        this.loginError = true;
      })
  }



}

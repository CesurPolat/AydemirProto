import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  changePassword(data:any){
    console.log(data);
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  "Bearer "+localStorage.getItem('token'))
    }
    this.http.post('https://api.aydemir.ndepo.com/api/Auth/changepassword',data ,header).subscribe((data:any)=>{

    })

  }

  logout(){
    localStorage.removeItem("token");
    window.location.pathname="";
  }

}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit, AfterViewInit {

  elems: any = [];

  isLoaded:any;

  constructor(private http: HttpClient) {
    //https://api.aydemir.ndepo.com/api/Status/getall
    //https://api.aydemir.ndepo.com/api/WorkOrders/getall
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  "Bearer "+localStorage.getItem('token'))
    }
    this.http.get('https://api.aydemir.ndepo.com/api/WorkOrders/getworkerbyclaims',header).subscribe((data: any) => { this.elems = data.data; 
    console.log(data); 
    this.isLoaded = true; 
  })
    
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){

  } 

}

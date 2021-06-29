import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-isdetay',
  templateUrl: './isdetay.component.html',
  styleUrls: ['./isdetay.component.scss']
})
export class IsdetayComponent implements OnInit {

  elems:any = [];
  statusElems:any = [];
  id:any = 0;
  creatorName:any="";
  formElems:any =[];
  constructor(private http:HttpClient,private router:ActivatedRoute) {
    router.params.subscribe((data:any)=>{this.id=data.id;})
    //https://api.aydemir.ndepo.com/api/WorkOrders/
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  "Bearer "+localStorage.getItem('token'))
    }
    this.http.get('https://api.aydemir.ndepo.com/api/WorkOrders/getworkerbyclaims',header).subscribe((data:any)=>{
      
    this.elems = data.data[this.id];
    this.creatorName = data.data[this.id].relationUser.firstName + " " + data.data[this.id].relationUser.lastName;
  })
    this.http.get('https://api.aydemir.ndepo.com/api/Status/getusertatuses', header).subscribe((data:any)=>{
      this.statusElems = data.data;
    })
    
   }

   getUser(){
    this.http.get('https://api.aydemir.ndepo.com/api/Users/'+this.elems.jobCreatorId).subscribe((data:any)=>{console.log(data); this.creatorName = data.data.firstName+" "+data.data.lastName;})

   }

  ngOnInit(): void {
  }

  Test(data:any){
    console.log(data);
    this.formElems = data;

  }

}

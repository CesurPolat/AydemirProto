import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aydemirProto';
  
  isToken:any;
  


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isToken = localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem("token");
    window.location.pathname="";
  }
  
}

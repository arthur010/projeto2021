import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  httpOptions = {
    headers: new HttpHeaders ({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    
  }

  onSubmit(form){
    console.log(form);
    this.http
    .post('http://localhost:3000/item',JSON.stringify(form.value), this.httpOptions).subscribe()  

  }

}

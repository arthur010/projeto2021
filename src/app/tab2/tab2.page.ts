import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { atividade } from '../service/atividade';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

 
item: atividade[] = [];

  constructor( private http: HttpClient) {}

  ngOnInit() {
    this.http
    .get<atividade[]>('http://localhost:3000/item')
    .subscribe(results => this.item = results);
  };

  onDelete(dados) {
    this.http.delete('http://localhost:3000/item')
  }


  

}

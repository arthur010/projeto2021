import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { atividade } from '../service/atividade';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  id: number;
  item: atividade[] = [];
  objeto: object = {};


  constructor( 
    private route: ActivatedRoute,
    private http: HttpClient
     ) { }

  ngOnInit() {
    this.route.params
    .subscribe((caixa: any) => this.id = +caixa['id']);
    console.log(this.id);

    this.http.get<atividade[]>('http://localhost:3000/item')
    .subscribe(dados => { this.item = dados;
    
    for(var i = 0; i < this.item.length; i++){
      if ( this.item[i].id === this.id){
        this.objeto = this.item[i];
        break;
      }
    }
  }
    );
  }


}

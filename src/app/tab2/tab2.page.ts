import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { atividade } from '../service/atividade';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
item: atividade[] = [];

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

  constructor( private http: HttpClient, private alertControl: AlertController ) {}

  ngOnInit() {
    this.http
    .get<atividade[]>('http://localhost:3000/item')
    .subscribe(results => this.item = results);
  };

   async onDelete(id) {
   const alert = await this.alertControl.create({
      header: 'Atenção',
      subHeader: 'Isso apagará todos os dados!',
      message: 'Realmente deseja excluir?',
      buttons: [
        {
          text:'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelado')
          },
        },

        {
          text: 'ok',
          handler: () => {
            this.http.delete('http://localhost:3000/item/' + id, 
            this.httpOptions).subscribe();
          },
        },
      ],
   });
   
   await alert.present();

    // this.http.delete('http://localhost:3000/item')
  }


  

}

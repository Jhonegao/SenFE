import { SolicitacoesService } from './../solicitacoes.service';
import { Observable } from 'rxjs';
import { SolicitacoesDTO } from 'src/models/solicitacoes.dto';
import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { DetalhesPage } from '../detalhes/detalhes.page';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  data:Observable<any>;
  items:any;
  datas:Observable<any>
  solicitacao: any

  constructor(public navCtrl: NavController,
              public solicitacoesService: SolicitacoesService,
              private toastController: ToastController, 
              private routes : Router
             ){
    this.getSolciitacoes();
  };

  goAnOtherPage() {
    this.navCtrl.navigateRoot('DetalhesPage')
  }

  getSolciitacoes(){
    this.data = this.solicitacoesService.listar();
    this.data.subscribe(data =>{
      this.items = data;
      console.log(this.items)
      
    });
  }

  goToSolicitacao(id: string){
    this.datas = this.solicitacoesService.getSolicitacao(id);
      this.datas.subscribe(datas=>{
        this.solicitacao = datas;
        console.log(this.solicitacao)
      });   
      this.routes.navigate(["/detalhes"])
  }

}

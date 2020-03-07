import { SolicitacoesService } from './../solicitacoes.service';
import { Observable } from 'rxjs';
import { SolicitacoesDTO } from 'src/models/solicitacoes.dto';
import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

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
             ){
    this.getSolciitacoes();
  };

  getSolciitacoes(){
    this.data = this.solicitacoesService.listar();
    this.data.subscribe(data =>{
      this.items = data;
      console.log(this.items)
    })
  }

  goToSolicitacao(id: string){
    this.datas = this.solicitacoesService.getSolicitacao(id);
      this.datas.subscribe(async () =>{ 
        this.solicitacao = await this.datas
    
  })
    console.log(this.solicitacao)

  }

}

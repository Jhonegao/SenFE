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


  data: Observable<any>;
  items: any;
  datas: Observable<any>
  solicitacao: any
  semstatus: any = [];

  constructor(public navCtrl: NavController,
    public solicitacoesService: SolicitacoesService,
    private toastController: ToastController,
    private routes: Router
  ) {
  };

  ionViewWillEnter() {

    this.getSolciitacoes()
    console.log("Carregou")
  }

  goAnOtherPage() {
    this.navCtrl.navigateRoot('DetalhesPage')
  }

  getSolciitacoes() {
    this.semstatus = []
    this.datas = this.solicitacoesService.listSolicitacao();
    this.datas.subscribe(response => {
      this.items = response;
      this.items.forEach(element => {

        if (element.status === null) this.semstatus.push(element)
      });
    }); console.log(this.semstatus)
  }
  goToSolicitacao(id: string) {
    this.data = this.solicitacoesService.getSolicitacao(id);
    this.data.subscribe(response => {
      this.solicitacao = response;
      console.log(this.solicitacao.id)
      this.routes.navigate(['/detalhes/', this.solicitacao.id])
    });
  }

}

import { SolicitacoesService } from './../solicitacoes.service';
import { Component, OnInit } from '@angular/core';
import { SolicitacoesDTO } from 'src/models/solicitacoes.dto';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  tablestyle = 'bootstrap';
  solicitacoesLista: SolicitacoesDTO[] = [];

  constructor(private SolicitacoesService: SolicitacoesService) { }

  ionViewWillEnter() {
    this.list()
  }
  list() {
    this.SolicitacoesService.listSolicitacao().subscribe(response => this.solicitacoesLista = response);
  }

}

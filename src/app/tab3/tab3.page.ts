import { SolicitacoesService } from './../solicitacoes.service';
import { Component, OnInit } from '@angular/core';
import { SolicitacoesDTO } from 'src/models/solicitacoes.dto';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  tablestyle = 'bootstrap';
  solicitacoesLista: SolicitacoesDTO[] = [];
  
  constructor(private SolicitacoesService: SolicitacoesService) {  }

  ngOnInit() {
    this.list();
  }

  ionViewWillEnter(){
    this.list()
    console.log("Carregou")
  }
  list() {
  this.SolicitacoesService.listSolicitacao().subscribe(response => this.solicitacoesLista = response);
  }

}

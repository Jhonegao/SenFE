import { Component, OnInit } from '@angular/core';
import { SolicitacoesDTO } from 'src/models/solicitacoes.dto';
import { SolicitacoesService } from '../solicitacoes.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  data:Observable<SolicitacoesDTO>
  solicitacaoModel:SolicitacoesDTO
  obj:any
  teste:SolicitacoesDTO
  constructor(private activatedRoute: ActivatedRoute,
              public solicitacoesService: SolicitacoesService,
              ) {
        this.activatedRoute.params.subscribe((params) => {
        this.obj = params;
        this.catchSolicitacao(this.obj.id)     
    });      
  }

  ngOnInit() {
    
    this.teste = {
      id: "12",
      solicitante: "this.solicitacaoModel.solicitante",
      descricao: "descricaoo",
      preco: "valor",
      status: "1",
      motivo: "motivo nao aprovado",
     }
    console.log(this.teste)  
    //console.log(this.solicitacaoModel);
    
    
  }
    
   catchSolicitacao(id: string){
    this.data = this.solicitacoesService.getSolicitacao(id);
    this.data.subscribe(data=>{
      this.solicitacaoModel = data;
      //console.log(this.solicitacaoModel)       
    });
  };
}
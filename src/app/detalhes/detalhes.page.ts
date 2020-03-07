import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
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

  data:Observable<any>
  solicitacaoModel:SolicitacoesDTO
  obj:any
  teste=0
  constructor(private activatedRoute: ActivatedRoute,
              public solicitacoesService: SolicitacoesService,) {
        this.activatedRoute.params.subscribe((params) => {
        this.obj = params;
      
    });
   }

  ngOnInit() {
    
    this.catchSolicitacao(this.obj.id)
   }   
   catchSolicitacao(id: string){
    this.data = this.solicitacoesService.getSolicitacao(id);
    this.data.subscribe(data=>{
      //this.solicitacaoModel = data;
      console.log(this.solicitacaoModel)
    });
  };
}

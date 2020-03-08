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
export class DetalhesPage implements OnInit{
  

  data:Observable<any>;
  items:SolicitacoesDTO
  obj:any;
  teste:SolicitacoesDTO;
  constructor(private activatedRoute: ActivatedRoute,
              public solicitacoesService: SolicitacoesService,
              ) {
        this.activatedRoute.params.subscribe((params) => {
        this.obj = params;
    });
  }

  ionViewWillEnter(){
    
  }
  
  async ionViewDidEnter(){
  
    this.btncheck();
    //await console.log(this.items);
    
    console.log(this.teste)
    
    
  }
  ngOnInit(): void {
        this.solicitacoesService.getSolicitacao(this.obj.id).subscribe(data =>{
        this.items = data;     
       this.teste = {
      id: this.items.id,
      solicitante: this.items.solicitante,
      descricao: "string",
      preco: "string",
      status: "string",
      motivo: "string",
      }; 
      })
       
  }
  
    btncheck(){
    console.log(this.items)  
      }

};
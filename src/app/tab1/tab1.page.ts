import { SolicitacoesService } from './../solicitacoes.service';
import { SolicitacoesDTO } from 'src/models/solicitacoes.dto';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  formGroup: FormGroup;
  solicitacao: SolicitacoesDTO[]=[];

  

  constructor(public formBuilder: FormBuilder,
              private SolicitacoesService: SolicitacoesService) {
    
      
      this.formGroup = this.formBuilder.group({
        descricao: ['',[Validators.required, Validators.minLength(3),Validators.maxLength(200)]],
        solicitante: ['',[Validators.required, Validators.minLength(3),Validators.maxLength(200)]],
        preco: ['', [Validators.required]]
        },
        error=>{});

  }

  

  registrarSolicitacao(){
    this.SolicitacoesService.registrarSolicitacao(this.formGroup.value)
    .subscribe(response=>{})
  }

}
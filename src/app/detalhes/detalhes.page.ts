import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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
  
  formGroup: FormGroup;
  data:Observable<any>;
  item:SolicitacoesDTO
  obj:any;
  opcao:string

  constructor(private activatedRoute: ActivatedRoute,
              public solicitacoesService: SolicitacoesService,
              public formBuilder: FormBuilder,
              ) {
        this.activatedRoute.params.subscribe((params) => {
        this.obj = params;
    });

    this.formGroup = this.formBuilder.group({
      status: [null,[Validators.required]],
      motivo: ['', [Validators.required]],
      });
    }

  ngOnInit(): void {
        this.solicitacoesService.getSolicitacao(this.obj.id).subscribe(data =>{
        this.item = data;     
        })
       
  }
  
    btncheck(){
    console.log(this.item)  
      }

};
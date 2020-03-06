import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  formGroup: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    
      
      this.formGroup = this.formBuilder.group({
        textos: ['',[Validators.required, Validators.minLength(3),Validators.maxLength(200)]],
        moeda: ['', [Validators.required]]
        },
        error=>{});

  }

  registrarSolicitacao(){}

}
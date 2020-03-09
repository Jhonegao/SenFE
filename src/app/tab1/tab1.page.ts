import { SolicitacoesService } from './../solicitacoes.service';
import { SolicitacoesDTO } from 'src/models/solicitacoes.dto';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  formGroup: FormGroup;
  solicitacao: SolicitacoesDTO[] = [];



  constructor(public formBuilder: FormBuilder,
    private SolicitacoesService: SolicitacoesService,
    public alertController: AlertController,
    public navCtrl: NavController) {


    this.formGroup = this.formBuilder.group({
      descricao: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      solicitante: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      preco: ['', [Validators.required]]
    },
      error => { });

  }

  registrarSolicitacao() {
    this.SolicitacoesService.addSolicitacao(this.formGroup.value)
      .subscribe(response => {
        this.showAlert();
      })
    this.formGroup.reset();
  }

  async showAlert() {
    const alert = await this.alertController.create({
      message: "Solicitação Registrada",
      backdropDismiss: false,
      buttons: [
        {
          text: 'ok',
          handler: () => {
            this.navCtrl.navigateRoot('')
          }
        }
      ]
    });
    await alert.present();
  }

}
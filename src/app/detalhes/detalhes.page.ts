import { Component, OnInit } from '@angular/core';
import { SolicitacoesDTO } from 'src/models/solicitacoes.dto';
import { SolicitacoesService } from '../solicitacoes.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  data: Observable<any>;
  item: SolicitacoesDTO
  obj: any;
  opcao: string

  constructor(private activatedRoute: ActivatedRoute,
    public solicitacoesService: SolicitacoesService,
    public alertController: AlertController,
    public navCtrl: NavController,
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.obj = params;
    });
  }

  ngOnInit(): void {
    this.solicitacoesService.getSolicitacao(this.obj.id).subscribe(data => {
      this.item = data;
    })
  }

  btnEnviar() {
    this.solicitacoesService.updateSolicitacao(this.item).subscribe((response) => {
      console.log("response is :", response.id)
    })
    this.showAlert();
  }

  async showAlert() {
    const alert = await this.alertController.create({
      message: "Status atualizado",
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

};
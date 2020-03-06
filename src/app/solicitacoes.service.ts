import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolicitacoesDTO } from 'src/models/solicitacoes.dto';

@Injectable({
  providedIn: 'root'
})
export class SolicitacoesService {

  solicitacoesUrl = 'http://localhost:3000/pedidos';

  constructor(private http: HttpClient) { }

  listar(): Observable<SolicitacoesDTO[]>{
    return this.http.get<SolicitacoesDTO[]>(`${this.solicitacoesUrl}`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolicitacoesDTO } from 'src/models/solicitacoes.dto';

@Injectable({
  providedIn: 'root'
})
export class SolicitacoesService {

  solicitacoesUrl = 'http://ec2-52-67-16-133.sa-east-1.compute.amazonaws.com:3000/pedidos';

  constructor(private http: HttpClient) { }

  listar(): Observable<SolicitacoesDTO[]>{
    return this.http.get<SolicitacoesDTO[]>(this.solicitacoesUrl)
  }
  registrarSolicitacao(sol: SolicitacoesDTO): Observable<HttpResponse<SolicitacoesDTO>>{
    return this.http.post<SolicitacoesDTO>(this.solicitacoesUrl, sol, { observe: 'response' })
  }

  getSolicitacao(id: string): Observable<SolicitacoesDTO> {
    return this.http.get<SolicitacoesDTO>(this.solicitacoesUrl + '/' + id) 
  }

}

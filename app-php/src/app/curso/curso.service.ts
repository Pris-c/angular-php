import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})


export class CursoService {

  //URL 
  url = "http://localhost/api/php/";

  //Vetor
  vetor: Curso[];

   //Construtor
  constructor(private http: HttpClient) { }

  //Obter todos os cursos
  obterCursos(): Observable<Curso[]>{
    console.log('call selecao service');                  //teste
    return this.http.get(this.url + "listar.php").pipe(
      map((res: any) => {
        console.log('list: ' + res);                     //teste
        this.vetor = res['cursos'];
        return this.vetor;
        })
    ) 
  } 


  /*
  //Cadastrar curso
  cadastrarCurso(c: Curso): Observable<Curso[]>{
    return this.http.post(this.url + 'cadastrar', {cursos: c})
    .pipe(map((res) => {
      console.log('push: ' + res);        //modificado para teste
      //this.vetor.push(res['cursos']);
      return this.vetor;
    }))
  }


//Remover curso CAPGGEMINI
removerCurso(c: Curso): Observable<Curso[]>{

  const params = new HttpParams().set("idCurso", c.idCurso.toString());

  return this.http.delete(this.url + 'excluir', {params: params})
  .pipe(map((res) =>  {
    const filtro = this.vetor.filter((curso) => {
      return +curso['idCurso'] != +c.idCurso;
    });

    return this.vetor = filtro;


  }))
}



//Remover Curso - modificado
removerCurso(c: Curso): Observable<Curso[]>{

  const params = new HttpParams().set("idCurso", c?.idCurso?.toString() ?? 'nothing');

    return this.http.delete(this.url + 'excluir', {params: params})
    .pipe(map((res) =>  {
      const filtro = this.vetor.filter((curso) => {
        const auxIdCurso = c?.idCurso ?? '-1';
        const auxCurso = curso['idCurso'] ?? '-1';
        return +auxCurso != +auxIdCurso;
      });

    return this.vetor = filtro;

  }))
}
*/




}

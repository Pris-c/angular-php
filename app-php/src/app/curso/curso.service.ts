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

 
 
  //FACILITADOR CAP
  obterCursos():Observable<Curso[]>{   
    return this.http.get(this.url+"listar")   
    .pipe( map((res:any) =>{    
       this.vetor = res; 
       return this.vetor;
      }))
    }  

  
  //FACILITADOR CAP
  cadastrarCurso(curso:Curso):Observable<Curso>{
    return this.http.post<Curso>(this.url+'cadastrar',curso)
    }


//Remover curso CAPGGEMINI
/*removerCurso(curso: Curso): Observable<Curso[]>{
  //const id = curso.idCurso.toString();
  //const params = new HttpParams().set("idCurso",  id);
  //console.log("id: type="  + typeof(id) + " valor=" + id);
  
  const params = new HttpParams().set("idCurso", parseInt(curso.idCurso.toString()));
  console.log("params: type= "  + typeof(params) + " valor=" + params);
  
  
 
  return this.http.delete<Curso>(this.url + 'excluir', {params: params})
  .pipe( map ((res) =>  { const filtro = this.vetor.filter((curso) => { return curso['idCurso'] != curso.idCurso; });

    return this.vetor = filtro;


  }))?
}*/

removerCurso(curso: Curso): Observable<Curso>{
  const url = `${this.url}excluir?idCurso=${curso.idCurso}`
  console.log(url);
  return this.http.delete<Curso>(url);
}




//Alterar curso
atualizarCurso(curso: Curso): Observable<Curso[]>{

  //Percorrer o vetor para encontrar o id do curso alterado
  return this.http.put<Curso>(this.url + 'alterar', curso)
  .pipe(map((res: Curso) => {
    const cursoAlterado = this.vetor.find((item) => {

      return  +item['idCurso'] === +['idCurso'];
    });

    //Alterar o valor do vetor local
    if(cursoAlterado){
      cursoAlterado['nomeCurso'] = curso['nomeCurso'];
      cursoAlterado['valorCurso'] = curso['valorCurso'];
    }

    //Retorno
    return this.vetor;
  }))

}

}


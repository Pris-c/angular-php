import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //URL Base
  url = "http://localhost/api/php/";

  //Vetor de Cursos
  vetor: Curso[];

  //Objeto da Classe Curso
  curso = new Curso();

  //Construtor
  constructor(
    //private http: HttpClient,
    private curso_service: CursoService
    ){}


  //Inicializador
  ngOnInit(){
    //Ao inicializar o sistema, deverá listar os cursos
    this.selecao();
  }

  //Selecionar
  selecao(){
    console.log('call selecao component');
    this.curso_service.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    )
  }


  //Cadastrar
  cadastro(): void {
    alert("Cadastro");
  }

  

  //Alterar
  alterar(): void{
    alert("Alterar");
  }


    /*
    Remover - CAPGEMINI
    remover(){
      this.curso_service.removerCurso(this.curso).subscribe(
        (res : Curso[]) => {
          this.vetor = res;
          this.curso.nomeCurso = null;
          this.curso.valorCurso = null;
        }
      );
    }
    */

  //Remover
  remover(){
    this.curso_service.removerCurso(this.curso).subscribe(
      (res : Curso[]) => {
        this.vetor = res;

        this.curso.nomeCurso = "vazio";
        this.curso.valorCurso = -1;

      }
    );
  }

  //Selecionar um curso especifico
  selecionarCurso(c: Curso){
    this.curso.idCurso = c.idCurso;
    this.curso.nomeCurso = c.nomeCurso;
    this.curso.valorCurso = c.valorCurso;

  }


}

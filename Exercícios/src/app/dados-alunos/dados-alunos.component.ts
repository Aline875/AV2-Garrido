import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Aluno {
  matricula: number;
  nome: string;
  idade: number;
  curso: string;
  rendimentoEscolar: { [key: string]: number };
}

@Component({
  selector: 'app-dados-alunos',
  templateUrl: './dados-alunos.component.html',
  styleUrls: ['./dados-alunos.component.css']
})
export class DadosAlunosComponent implements OnInit {
  items: Aluno[] = [];
  rendimentoKeys: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getJSONData();
  }

  getJSONData() {
    this.http.get<Aluno[]>('http://localhost:3001/alunos')
      .subscribe((data) => {
        this.items = data;
        if (data.length > 0) {
          this.rendimentoKeys = Object.keys(data[0].rendimentoEscolar);
        }
      });
  }

  calcularMediaGlobal(rendimentoEscolar: { [key: string]: number }): number {
    const notas = Object.values(rendimentoEscolar) as number[];
    const totalNotas = notas.reduce((acc, nota) => acc + nota, 0);
    return totalNotas / notas.length;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  atividades: { texto: string, concluida: boolean }[] = [];

  ngOnInit() {
    this.atividades = [
      { texto: "Comprar pão", concluida: false },
      { texto: "Limpar a casa", concluida: false },
      { texto: "Lavar a roupa", concluida: false },
    ];
  }

  addAtividade() {
    const novaAtividade = prompt('Digite uma nova atividade:');
    if (novaAtividade !== null && typeof novaAtividade === 'string') {
      this.atividades.push({ texto: novaAtividade, concluida: false });
    }
  }

  excluirAtividade(atividadeIndex: number) {
    this.atividades.splice(atividadeIndex, 1);
  }

  concluirAtividade(atividadeIndex: number) {
    this.atividades[atividadeIndex].concluida = true;
  }
}

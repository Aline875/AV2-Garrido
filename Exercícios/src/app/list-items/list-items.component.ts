import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

    atividades: string[] = [];
  
    constructor() { }
  
    ngOnInit() {
      this.atividades = [
        "Comprar pão",
        "Limpar a casa",
        "Lavar a roupa",
      ];
    }
  
    addAtividade() {
      const novaAtividade = prompt('Digite uma nova atividade:');
      if (novaAtividade !== null && typeof novaAtividade === 'string') {
        this.atividades.push(novaAtividade);
      }
    }
  
    excluirAtividade(atividade: string, i: number) {
      this.atividades.splice(i, 1);
    }
  
    concluirAtividade(atividade: string, i: number) {
      this.atividades[i] = `${atividade} (concluída)`;
    }


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent {
  nome!: string;
  email!: string;
  senha!: string;

  onSubmit(form: any): void {
    if (form.valid) {
      alert('Formulário enviado com sucesso!');
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }
}

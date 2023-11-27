import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrls: ['./form-cadastro.component.css']
})
export class FormCadastroComponent implements OnInit {

  nome!: string;
  email!: string;
  senha!: string;
  isFormSubmitted: boolean = false;
  isFormValid: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onSubmit(): void {
    // Valida os dados do formulário
    if (this.nome.length === 0) {
      this.isFormValid = false;
      return;
    }

    if (!this.email.includes('@')) {
      this.isFormValid = false;
      return;
    }

    if (this.senha.length < 6) {
      this.isFormValid = false;
      return;
    }

    // Envia os dados do formulário para um servidor
    // ...

    // Marca o formulário como enviado
    this.isFormSubmitted = true;

    // Exibe uma mensagem para o usuário
    if (this.isFormValid) {
      alert('Formulário enviado com sucesso!');
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }
}

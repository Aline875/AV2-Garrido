import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.css']
})
export class ComponentePaiComponent {
  itensDoPai: string[] = ['Item 1', 'Item 2', 'Item 3']; 
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-area-logada',
  templateUrl: './area-logada.component.html',
  styleUrls: ['./area-logada.component.css']
})
export class AreaLogadaComponent {
  @Input() logado: boolean = false;
  @Input() email: string = '';
}

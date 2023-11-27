import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contador-component',
  templateUrl: './contador-component.component.html',
  styleUrls: ['./contador-component.component.css']
})
export class ContadorComponentComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  count=0;
  ngOninit() {}
  increment () {
    this.count++;
  }
  descrement () {
    if (this.count >= 1) {this.count--;}
    
  }

}

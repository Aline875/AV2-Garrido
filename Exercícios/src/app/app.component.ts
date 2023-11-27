import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = [
    {
      id: 1,
      name: "Smartphone Samsung S22",
      listPrice: 3200,
      salePrice: 3000,
      image: "https://m.media-amazon.com/images/I/71UsdX85kZL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 2,
      name: "Laptop Dell XPS 15",
      listPrice: 2500,
      salePrice: 2300,
      image: "https://m.media-amazon.com/images/I/51lkdr+ms9L._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 3,
      name: "Smart TV Sony Bravia 55",
      listPrice: 1200,
      salePrice: 1000,
      image: "https://m.media-amazon.com/images/I/617vtnOndKL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 4,
      name: "Apple iPhone 13 Pro",
      listPrice: 1300,
      salePrice: 1200,
      image: "https://m.media-amazon.com/images/I/51y+xXlXPrL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 5,
      name: "Samsung 4K Ultra HD TV",
      listPrice: 900,
      salePrice: 800,
      image: "https://m.media-amazon.com/images/I/51mstEiYgXL._AC_UF1000,1000_QL80_.jpg"
    }
  ];

  //Exercício 2
  // Método para lidar com a adição de produtos.
  handleProductAdded(newProduct: {
    id: number;
    name: string;
    listPrice: number;
    salePrice: number;
    image: string;
  }) {
    // Lógica para adicionar o novo produto ao array 'products'.
    this.products.push(newProduct);
  }
}

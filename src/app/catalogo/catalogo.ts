import { Component } from '@angular/core';
import { Product } from '../product/product'

@Component({
  selector: 'app-catalogo',
  imports: [ Product ],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo {
    productos=[
    {
      nombre: 'Producto1',
      precio: 100,
      id:1
    },
    {
      nombre: 'Producto2',
      precio: 100,
      id:1
    },
    {
      nombre: 'Producto3',
      precio: 100,
      id:1
    }
  ]
}

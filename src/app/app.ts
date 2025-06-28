import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product/product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Product],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'clase_2_tp';
   
  nombre='Emiliano';
  saludar(){
    alert('Hola a todos')
  }
  contador=1;
  incrementar(){
    this.contador=this.contador+1;
    if (this.contador===10){
      alert('Has llegado al máximo')
      this.contador=10
    }
  }
    decrementar(){
    this.contador=this.contador-1;
    if (this.contador===0){
      alert('Has llegado al minimo')
      this.contador=0
    }
  }
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

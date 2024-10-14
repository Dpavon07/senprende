import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import {PruebaService} from './services/prueba.service';






@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',


 

  
})
export class AppComponent {

  producto : any = {};
  page : any;
  bandera: boolean;
  constructor(private services:PruebaService ) { 
    this.page = 1;
    this.bandera = false;
  }

  ngOnInit() :void {   
    this.bandera = true;
    this.services.GetAll().subscribe( producto=>
      {
     this.producto = producto;
     

    });
  }
  columnas= this.producto = ['codigo', 'descripcion', 'precio', 'borrar'];

  datos: Articulo[] = [new Articulo(1, 'papas', 55),
  new Articulo(2, 'manzanas', 53),
  new Articulo(3, 'naranjas', 25),
  ];

  articuloselect: Articulo = new Articulo(0, "", 0); 

  @ViewChild(MatTable) tabla1!: MatTable<Articulo>;

  borrarFila(cod: number) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.datos.splice(cod, 1);
      this.tabla1.renderRows();
    }
  }

  agregar() {
    this.datos.push(new Articulo(this.articuloselect.codigo, this.articuloselect.descripcion, this.articuloselect.precio));
    this.tabla1.renderRows();
    this.articuloselect = new Articulo(0, "", 0);
  }

  Edit() {  
    this.bandera = false;


  }
}



export class Articulo {
  constructor(public codigo: number, public descripcion: string, public precio: number) {
  }
}


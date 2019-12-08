import { Component, OnInit } from '@angular/core';

// Models
import { Producto } from 'src/app/model/producto';

// Services
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {
  categorias:any[] = undefined;

  producto:Producto = new Producto();

  selectedCategoria = undefined;

  constructor(private categoriaService: CategoriaService,
    private productoService: ProductoService) {}

  ngOnInit() {
    this.producto.descatalogado = false;
    
    this.categoriaService.getCategorias().subscribe(datos => {
      this.categorias = [];
      for (let d of datos) {
        this.categorias.push({categoria: String(d)})
      }
    });

  }

  addProducto(){
    
    this.producto.codigo = Math.floor(Math.random() * 50000) + 50;

    this.producto.categoria = this.selectedCategoria.categoria;
    console.log(this.producto.fechaAlta);
    this.productoService.altaProducto(this.producto).subscribe(datos => {
      console.log(datos);
    });

    this.producto = new Producto();
  }

}

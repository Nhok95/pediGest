import { Component, OnInit } from '@angular/core';

// Models
import { Producto } from 'src/app/model/producto';

// Services
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {
  categorias:any[] = [];
  cars:any[] = [];
  selected: string = "";
  selectedP: string = "";

  producto:Producto = new Producto();

  constructor(private categoriaService: CategoriaService,
    private productoService: ProductoService) {}

  ngOnInit() {
    this.producto.descatalogado = false;

    this.cars.push({codigo: "45344", empresa: "ADEPSA", codigoPostal: "08020", email: "info@adepsa.com"});
    this.cars.push({codigo: "98245", empresa: "CIRCOSA", codigoPostal: "08445", email: "admin@circosa.es"});
    this.cars.push({codigo: "23439", empresa: "Comercial Millo, S.L.", codigoPostal: "68022", email: "p.damaso@millo.com"});
    this.cars.push({codigo: "10933", empresa: "Ferretería Hermanos Matanzas", codigoPostal: "08012", email: "info@technomat.com"});
    this.cars.push({codigo: "10552", empresa: "Central de la Gafa Distribución S.A.", codigoPostal: "08044", email: "admin@cgd.com" });
    this.cars.push({codigo: "48924", empresa: "DIBUG S.A.", codigoPostal: "25912", email: "dibug@dibug.net"});
    this.cars.push({codigo: "29233", empresa: "Aceral S.L.", codigoPostal: "08072", email: "carlos.moreno544@gmail.com"});
    this.cars.push({codigo: "31562", empresa: "CIM S.A.", codigoPostal: "08020", email: "info@cim.com"});
    this.cars.push({codigo: "48992", empresa: "Ramón Batlle", codigoPostal: "08013", email: "r.batlle@gmail.com"});
    this.cars.push({codigo: "10935", empresa: "SOFyGEST, S.L.", codigoPostal: "08003", email: "c.vilagut@sofygest.com"});

    this.categoriaService.getCategorias().subscribe(datos => {
      for (let d of datos) {
        this.categorias.push({categoria: d, nada:0});
      }
      console.log(this.categorias);
      console.log(this.cars);
    });
    
  }

  addProducto(){
    
    this.producto.codigo = Math.floor(Math.random() * 50000) + 50;
    this.productoService.altaProducto(this.producto).subscribe(datos => {
      console.log(datos);
    });
  }

}

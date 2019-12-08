import { Component, OnInit } from '@angular/core';

// Models
import { Camarero } from 'src/app/model/camarero';
import { Pedido } from 'src/app/model/pedido';

// Services
import { CamareroService } from 'src/app/services/camarero.service';
import { ProductoService } from 'src/app/services/producto.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { LineaPedido } from 'src/app/model/lineaPedido';
import { Producto } from 'src/app/model/producto';



@Component({
  selector: 'app-alta-pedido',
  templateUrl: './alta-pedido.component.html',
  styleUrls: ['./alta-pedido.component.css']
})
export class AltaPedidoComponent implements OnInit {

  camareros:Camarero[] = undefined;
  productos:Producto[] = undefined;
  cols: any[];

  pedido:Pedido = new Pedido();

  myLineaPedido:LineaPedido = new LineaPedido();
  misLineas:LineaPedido[] = undefined;
  

  constructor(private camareroService: CamareroService,
    private productoService: ProductoService,
    private pedidoService: PedidoService) { }

  ngOnInit() {
    this.camareroService.getAll().subscribe(datos => {
      this.camareros = [];
      for (let d of datos) {
        this.camareros.push(new Camarero(d.codigo, d.nombre));
      }
      this.pedido.camarero = this.camareros[0];
    });

    this.cols = [
      { field: 'producto', header: 'Producto' },
      { field: 'cantidad', header: 'Cantidad' },
      { field: '', header: 'Remove'}
    ];
    
    this.pedido.lineasPedido = [];
    this.pedido.fecha = new Date();

    this.productoService.getAll().subscribe(datos => {
      this.productos = [];
      for (let d of datos) {
        this.productos.push(new Producto(d.codigo, d.nombre, d.precio, d.descripcion, d.fechaAlta, d.descatalogado, d.categoria));
      }
    });

    this.misLineas = [];
  }

  addLinea() {

    this.myLineaPedido.precio = this.myLineaPedido.producto.precio;
    this.misLineas.push(this.myLineaPedido);

    this.myLineaPedido = new LineaPedido();
  }

  removeLinea(linea:LineaPedido){
    this.misLineas.splice(this.misLineas.indexOf(linea),1);
  }

  addPedido() {

    this.pedido.lineasPedido = this.misLineas;

    this.pedidoService.altaPedido(this.pedido).subscribe(datos => {
      console.log(datos);
    });
    
  }

}

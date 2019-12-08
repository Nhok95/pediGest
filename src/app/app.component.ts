import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Camareros',
        items: [
          {label: 'Alta Camarero', routerLink: 'Alta_Camarero'},
          {label: 'Listado Camareros', routerLink: 'Listado_Camareros'}
        ]
      },
      {
        label: 'Producto',
        items:[
          {label: 'Alta Producto', routerLink: 'Alta_Producto'},
          {label: 'Listado Productos', routerLink: 'Listado_Productos'}
        ]
      },
      {
        label: 'Pedido',
        items:[
          {label: 'Alta Pedido', routerLink: 'Alta_Pedido'},
          {label: 'Listado Pedidos', routerLink: 'Listado_Pedidos'}
        ]
      },
      {separator:true},
      { label: 'AboutUs', routerLink: 'About_Us'}
    ];
  }
}

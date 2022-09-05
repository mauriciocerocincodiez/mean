import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Producto } from 'src/app/modelos/producto';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  listProductos: Producto[]=[];

  constructor(private _productoService: ProductoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerProductos();
   }

   obtenerProductos(){
    this._productoService.getProductos().subscribe(data => {
      
      this.listProductos=data;
    }, error => {

      console.log(error);
    })
  }

  eliminarProducto(id: any){

    this._productoService.eliminarProducto(id).subscribe(data => {
      this.toastr.warning('El producto fue eliminado de forma exitosa!', 'PRODUCTO ELIMINADO!');
      this.obtenerProductos();
    })
  }

}

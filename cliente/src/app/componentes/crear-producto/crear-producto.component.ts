import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/modelos/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

productoForm: FormGroup;
titulo = 'crear producto';
id : string | null ;

  constructor( private fg: FormBuilder, 
    private router: Router,
    private _productoService: ProductoService,
    private aRouter: ActivatedRoute,
    private toastr: ToastrService
    ) {
               
    this.productoForm = this.fg.group({

      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto(){
    

    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value,
    }

    if(this.id !== null){
      // editamos producto
     this._productoService.editarProducto(this.id, PRODUCTO).subscribe(data =>{
      this.toastr.warning('El producto fue actualizado de forma exitosa!', 'PRODUCTO ACTUALIZADO!');
     
      this.router.navigate(['/']);
     })

    }else {
      // agregamos el producto
      console.log(PRODUCTO);
      this._productoService.guardarProducto(PRODUCTO).subscribe(data => {

        this.toastr.success('El producto fue agregado de forma exitosa!', 'PRODUCTO GUARDADO!');
        this.router.navigate(['/']);
      })
    }

   

    
  }

  esEditar(){
    if(this.id !== null){
      this.titulo = 'Editar Producto';
      this._productoService.obtenerProducto(this.id).subscribe(data =>{
        // se obtienen los datos del producto y se llena en formulario
        this.productoForm.setValue({

          producto: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio,


        })
      } )
      
    }
  }

}

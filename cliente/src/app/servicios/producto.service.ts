import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})

// en el servicio se realizan las peticiones a bakeng
export class ProductoService {

  url = 'http://localhost:4000/api/obtenerproductos';

  constructor(private http: HttpClient ) { }

  getProductos(): Observable<any> {
return this.http.get(this.url);
  }

  eliminarProducto(id: string): Observable<any>{
    return this.http.delete('http://localhost:4000/api/eliminarproducto/'+id);
  }

  
  guardarProducto(producto: Producto): Observable<any> {
    return this.http.post('http://localhost:4000/api/productos/crear', producto);
  }

  obtenerProducto(id: string): Observable<any>{
   return this.http.get('http://localhost:4000/api/productos/'+id);
  }
  editarProducto(id: string, producto: Producto):Observable<any>{
    return this.http.put('http://localhost:4000/api/actualizarproductos/'+id, producto);
  }
}

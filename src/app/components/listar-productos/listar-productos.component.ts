import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/model/producto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  listProductos:Producto[]=[]

  constructor(private _productoService:ProductoService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.obtenerProducto()
  }
obtenerProducto(){
  this._productoService.getProductos().subscribe(data=>{
    console.log(data);
    this.listProductos = data
  },error=>{
    console.log(error);
  })
}
eliminarProducto(id:any){
this._productoService.eliminaProducto(id).subscribe(data=>{
this.toastr.error("El producto eliminado con exito", "Producto eliminado")
this.obtenerProducto()
},error=>{
  console.log(error);
})
}
}

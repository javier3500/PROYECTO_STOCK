import { Pipe, PipeTransform } from '@angular/core';
//import { CRUDService,INVENTARIO } from '../CRUD/crud.service';
//import { InventarioComponent } from '../inventario/inventario.component';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  // LISTA : INVENTARIO[] | any; 
  

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) return value;
    const resultPosts : any = [];
    for (const post of value) {
      if (post.producto.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }


  /*

  transform(valor :valor[], arg: any): valor[] {
    return 
  }
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 50) return value;
    const resultPosts = [];
    for (const post of value) {
      if (post.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
       
      };
    };
    console.log(resultPosts);
    return resultPosts;
  }
  */
}

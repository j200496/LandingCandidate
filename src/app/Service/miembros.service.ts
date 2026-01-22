import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal, { SweetAlertIcon } from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class MiembrosService {
private urlpersonas = 'https://localhost:7052/api/Personas';
private urlprovincias = "https://localhost:7052/api/Provicias";
http = inject(HttpClient);
getprovincias(): Observable<any> {
  return this.http.get<any>(this.urlprovincias);
}
postpersonas(data: any){
return this.http.post(this.urlpersonas, data);
}
 warning(title:string, text:string, btncolor:string){
return Swal.fire({
  title: title,
  text: text,
  icon: "warning",
  confirmButtonText:'aceptar',
  confirmButtonColor: btncolor,
});
 }
  error(title:string, text:string, btncolor:string){
return Swal.fire({
  title: title,
  text: text,
  icon: "error",
  confirmButtonText:'aceptar',
  confirmButtonColor: btncolor,
});
 }
}

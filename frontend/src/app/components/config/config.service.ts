


import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

import { Usuario } from '../../usuario';
import {User,UserResponse} from '../../models/user.interface'



@Injectable({
  providedIn: 'root'
})
export class ConfigService {
private path = "http://localhost:8080/user/";
  constructor(private http: HttpClient,
private jwtHelper:JwtHelperService
    ) { }
respuesta="";

  prueba(){
    return this.http.get<Task[]>(`${this.path}`+"all");
  }


  /*login(form:User):Observable<UserResponse | void>{

let path = "http://localhost:8080/"
    return this.http.post<UserResponse>(`${path}`,form).pipe(
      map((resp:UserResponse)=>{
        console.log('Res->',resp)
      })

    )
  }*/
  /*handlerError(err):Observable<never>{
    let mensaje='ERROR';
    if(err){

      mensaje=`Error:code ${err.mensaje}`;
    }
    window.alert(mensaje);
    return throwError(mensaje);

  }*/


  logout(){}



  registrarUsuario(usuario:Usuario):Observable<Object>{
    return this.http.post(`${this.path}`+"registrarUsuario",usuario);
  }


//No se usa
  isAuth():boolean{

    const token = localStorage.getItem('token');

    if(!localStorage.getItem('token')) {

return false;

    }
    return true;

  }
  /*registrarUsuario(usuario:Usuario){
    return this.http.post(`${this.path}`+"registrarUsuario",usuario);
}*/
}

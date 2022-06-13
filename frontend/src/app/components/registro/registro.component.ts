import { ConfigService } from '../config/config.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../usuario';
import { Router } from '@angular/router';
import { FormGroup,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

 /* registroForm=new FormGroup({
    email:new FormControl('',Validators.required),
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),

  })*/

  usuario : Usuario = new Usuario();
 // usuario : Usuario;
  constructor(private configService:ConfigService, private router:Router) { }

  ngOnInit(): void {
    console.log(this.usuario);

  };

//comentario de prueba

registro(form:Usuario){

  this.configService.registrarUsuario(form).subscribe(data=>{

    console.log(data);
  })
}


  onRegistro(form:string){
    console.log(form);
  }
  guardarUsuario(){

    this.configService.registrarUsuario(this.usuario).subscribe(dato => {
      console.log(dato);
    },error => console.log(error))
  }

  onSubmit(){
    this.guardarUsuario();
  }


  /*validarDatos(){
    var variable = new String(null);
    if (variable == null) {
      alert("es null");
    } else {
      console.log("No es null");
    }
  }*/
}





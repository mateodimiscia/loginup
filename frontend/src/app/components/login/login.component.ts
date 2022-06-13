import { ConfigService } from './../config/config.service';
import { Component, OnInit } from '@angular/core';

import { Usuario } from 'src/app/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  constructor(private configs:ConfigService) { }

  ngOnInit(): void {



    /*const userData ={
      username:'dimisciamateo@gmail.com',
      password:'contraseña'
    };
    this.configs.login(userData).subscribe((res)=>console.log('Login'))*/
  }


}

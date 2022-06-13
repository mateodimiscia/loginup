import { ConfigService } from './../components/config/config.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private configs : ConfigService){

  }

  canActivate():boolean
    {
      if(!this.configs.isAuth()){
       alert('Token invalido');
        return false;
      }
    return true;
  }

}

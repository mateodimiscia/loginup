import { Component } from '@angular/core';
import { ConfigService } from './components/config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private confis : ConfigService){}
  title = 'loginup_frontend';
  respuesta = '';

 prueba2(){
this.confis.prueba().subscribe(all =>{console.log(all)})

  }
}

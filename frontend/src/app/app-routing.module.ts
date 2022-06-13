import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'}, //En caso de que el path (dirección) se encuentre vacía, redirija al login
  { path: 'login', component:LoginComponent},
  { path: 'registro', component:RegistroComponent},
  { path: 'home', component:HomeComponent}
  //,canActivate:[AuthGuard]
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

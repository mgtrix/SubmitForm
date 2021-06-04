import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitComponent } from './submit/submit.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListaAziendeComponent } from './lista-aziende/lista-aziende.component';
import { AggiungiAziendaComponent } from './aggiungi-azienda/aggiungi-azienda.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
  {path:'', component: HomeComponent, canActivate: [AuthGuard]},
  // {path:'home', component: HomeComponent },
  {path:'submit', component: SubmitComponent},
  {path:'login', component: LoginComponent},
  {path:'aziende', component: ListaAziendeComponent},
  {path:'aggiungiazienda', component: AggiungiAziendaComponent},

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Agency } from '../models/agency';
import { AuthenticationService } from '../services/authentication.service';
import { ListaAziendeService } from '../services/lista-aziende.service';

@Component({
  selector: 'app-lista-aziende',
  templateUrl: './lista-aziende.component.html',
  styleUrls: ['./lista-aziende.component.css']
})
export class ListaAziendeComponent implements OnInit {

  constructor( private listaAziende: ListaAziendeService, private authenticationServ: AuthenticationService) { }

  aziende = this.listaAziende.agency;
  
  user = this.authenticationServ.currentUserValue;

  ngOnInit(): void {
    
    console.log(this.authenticationServ.currentUserValue)
    console.log(this.aziende)
  }

}

import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Agency } from '../models/agency';
import { AlertService } from '../services/alert.service';
import { ListaAziendeService } from '../services/lista-aziende.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-aggiungi-azienda',
  templateUrl: './aggiungi-azienda.component.html',
  styleUrls: ['./aggiungi-azienda.component.css']
})
export class AggiungiAziendaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private alertService: AlertService ,private router: Router, private userService: UserService, private agency: ListaAziendeService) { }
  registerForm: FormGroup;
  loading= false;
  submitted = false;
  idNumber;
  

  submit(){
    console.log('hey')
    this.agency.agency.push(this.registerForm.value);
    
    let dati = this.agency.agency;
    let datiJson = JSON.stringify(dati)
    localStorage.setItem('agencies', datiJson)
    console.log(this.agency.agency)
    this.submitted = true;
    this.alertService.clear();
    if (this.registerForm.invalid) {
      return;
    }          
  }

  ngOnInit(): void {
    for(let i =0; i < this.agency.agency.length; i++){
      this.idNumber = i+1;
      console.log(i)
    }
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      subtitle: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      yearofDeploy: new FormControl('', [Validators.required]), 
      imgLink: this.idNumber
    })
    
  }
  get f() { return this.registerForm.controls; }
  

}

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators ,FormGroup, FormBuilder} from '@angular/forms';
import { AlertService } from '../services/alert.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor( private formBuilder: FormBuilder, private alertService: AlertService ,private router: Router, private userService: UserService) { }
  registerForm: FormGroup;
  loading= false;
  submitted = false;
  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
    })
    
  }
  get f() { return this.registerForm.controls; }
  submit(){
    console.log('hey')
    this.submitted = true;
    this.alertService.clear();
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
  }

}

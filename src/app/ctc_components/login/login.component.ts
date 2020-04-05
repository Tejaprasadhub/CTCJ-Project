import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login[];
  addLoginForm: FormGroup;
  formSubmitAttempt: boolean = false;
  constructor(private fb: FormBuilder, private router: Router) {
  }
  ngOnInit(): void {
    this.addLoginForm = this.fb.group({
      'userName': new FormControl('', { validators: [Validators.required, Validators.pattern('^([A-Za-z0-9 _\'-])*$')] }),
      'password': new FormControl('', {
        validators: [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
        ]
      }),
    });
  }
  addLoginSubmit(): void {
    if (this.addLoginForm.valid){
      this.router.navigateByUrl("Students");
      this.formSubmitAttempt = true;
      
    }
  

  }
  

}

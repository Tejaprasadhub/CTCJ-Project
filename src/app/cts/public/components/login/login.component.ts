import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  addLoginForm: FormGroup;
  formSubmitAttempt: boolean = false;
  constructor(private fb: FormBuilder, private router: Router,private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.addLoginForm = this.fb.group({
      // 'userName': new FormControl('', { validators: [Validators.required, Validators.pattern('^([A-Za-z0-9 _\'-])*$')] }),
      // 'password': new FormControl('', {
      //   validators: [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
      //   ]
      // }),
      'userName': new FormControl(''),
      'password': new FormControl(''),
    });
  }
  addLoginSubmit(): void {
     this.formSubmitAttempt = true;
      if (this.addLoginForm.valid){     
      // this.router.navigateByUrl("Students");    
      this.router.navigate(['/Admin/Dashboard'], {relativeTo: this.route});
    }
  

  }
  

}

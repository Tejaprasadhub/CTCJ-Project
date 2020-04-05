import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
// import { SelectItem } from 'primeng/api/selectitem';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  user: Users[];

  usertype: any;


  //to create Teacher From 
  addUserForm: FormGroup;
  formSubmitAttempt: boolean = false;
  constructor(private fb: FormBuilder) {
    this.usertype = [
      { name: 'Admin' },
      { name: 'DataEntryOperator' },
      { name: 'Teacher' }
    ];



  }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      'usertype': new FormControl('', { validators: [Validators.required] }),

      'userName': new FormControl('', { validators: [Validators.required,Validators.pattern('^([A-Za-z0-9 _\'-])*$')]}),
      'dispName': new FormControl('', { validators: [Validators.required,Validators.pattern('^([A-Za-z0-9 _\'-])*$')]}),
      'password': new FormControl('', { validators: [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
    ]}),


    });


  }

  addUserSubmit(): void {
    this.formSubmitAttempt = true;
  }

}

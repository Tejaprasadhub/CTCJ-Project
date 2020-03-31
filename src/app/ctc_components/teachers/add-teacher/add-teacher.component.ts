import { Component, OnInit } from '@angular/core';
import { Gender } from 'src/app/models/gender';
import { SelectItem } from 'primeng/api/selectitem';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {
  gender: Gender[];
  qualification: any;
  experience: any;
  expertiseIn: SelectItem[];
  associatedClasses: SelectItem[];
  associatedSections: SelectItem[];

  //to create Teacher From 
  addTeacherForm: FormGroup;
  formSubmitAttempt: boolean = false;
  constructor(private fb: FormBuilder) {
    this.gender = [
      { name: 'Male', code: 'M' },
      { name: 'Female', code: 'F' }
    ];
    this.qualification = [
      { name: 'B.Ed', code: 'B.Ed' },
      { name: 'M.Ed', code: 'M.Ed' },
      { name: 'Other', code: 'OTH' },
    ];
    this.experience = [
      { name: '0-1(yrs)', code: '0-1' },
      { name: '15-20(yrs)', code: '15-20' },
      { name: '>20(yrs)', code: '>20' },
    ];
    this.expertiseIn = [
      { label: 'Telugu', value: 'T' },
      { label: 'Hindi', value: 'H' },
      { label: 'English', value: 'E' },
      { label: 'Mathmatics', value: 'M' },
      { label: 'Science', value: 'S' }
    ];
    this.associatedClasses = [
      { label: '1st Class', value: '1' },
      { label: '2nd Class', value: '2' },
      { label: '3rd Class', value: '3' },
      { label: '4th Class', value: '4' },
      { label: '5th Class', value: '5' }
    ];
    this.associatedSections = [
      { label: 'A Section', value: 'A' },
      { label: 'B Section', value: 'B' },
      { label: 'C Section', value: 'C' },
      { label: 'D Section', value: 'D' },
      { label: 'E Section', value: 'E' }
    ];
  }

  ngOnInit(): void {
    this.addTeacherForm = this.fb.group({
      'teacherName': new FormControl('', { validators: [Validators.required,Validators.pattern('^([A-Za-z0-9 _\'-])*$')]}),
      'dateofbirth': new FormControl('', { validators: [Validators.required] }),
      'gender': new FormControl('', { validators: [Validators.required] }),
      'qualification': new FormControl('', { validators: [Validators.required] }),
      'experience': new FormControl(''),
      'mobile': new FormControl('', { validators: [Validators.required] }),
      'email': new FormControl('',{ validators: [Validators.pattern('')] }),
      'expertiseIn': new FormControl('', { validators: [Validators.required] }),
      'associatedClasses': new FormControl('', { validators: [Validators.required] }),
      'associatedSections': new FormControl('', { validators: [Validators.required] })
    });


  }

  addTeacherSubmit(): void {
    this.formSubmitAttempt = true;
  }

}

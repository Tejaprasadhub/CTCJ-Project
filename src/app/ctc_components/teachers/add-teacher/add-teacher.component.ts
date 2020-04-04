import { Component, OnInit } from '@angular/core';
import { Gender } from 'src/app/models/gender';
import { SelectItem } from 'primeng/api/selectitem';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {
  gender: Gender[];
  qualification: any;
  experience: any;
  teacherId:string;
  formType:string;
  pageTitle:string;
  isDisabled:boolean=false;
  isRequired:boolean=false;
  display:boolean=false;
  expertiseIn: SelectItem[];
  associatedClasses: SelectItem[];
  associatedSections: SelectItem[];
  private ngUnsubscribe = new Subject();
  //to create Teacher From 
  addTeacherForm: FormGroup;
  formSubmitAttempt: boolean = false;
  errorMessage:string="";
  successMessage:string="";
  constructor(private fb: FormBuilder, private router: Router,private route:ActivatedRoute) {
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

  ngOnInit(): void {// On page load
    //to get the query parameter values
    this.route.queryParams.pipe(takeUntil(this.ngUnsubscribe)).subscribe(params =>{
      this.teacherId = params['id'];
      this.formType = params['type'];
    });     
    //to create form with validations
    this.createForm();
    //to check whether the form to be created or updated
    if(this.formType == "create"){
      this.pageTitle="Add Teacher";
      this.isDisabled=false;
      this.isRequired=true;
    }else if(this.formType == "edit"){
      this.pageTitle="Edit Teacher";
      this.editControls();
    }else{
      this.pageTitle="View Details";
      this.isDisabled=true;
      this.isRequired=false;
    }

  }
  //Create form method to constuct a form with validations
  createForm(){
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
  // Add Teacher method
  addTeacherSubmit(): void {
    this.errorMessage="";
    this.successMessage="";
    this.formSubmitAttempt = true;
    if(this.addTeacherForm.valid){
      this.formSubmitAttempt=false;
      console.log(this.addTeacherForm.value);
      this.addTeacherForm.reset();     
      this.successMessage="Your changes have been successfully saved";
    }
  }
  //Reset form method
  resetForm():void{
    this.addTeacherForm.reset();
    this.successMessage="";
  }
  //to make controllers from disable to edit mode
  editControls():void{
    this.isRequired=true;
    this.isDisabled=false;
    this.pageTitle="Edit Teacher";
  }
  //navigating to Teachers list page
  list():void{
    this.router.navigateByUrl("Teachers");
  }

  //This is the method to clear all the form controllers
  private reset(){
    this.addTeacherForm=this.fb.group({
      'teacherName': new FormControl(''),
      'dateofbirth': new FormControl(''),
      'gender': new FormControl(''),
      'qualification': new FormControl(''),
      'experience': new FormControl(''),
      'mobile': new FormControl(''),
      'email': new FormControl(''),
      'expertiseIn': new FormControl(''),
      'associatedClasses': new FormControl(''),
      'associatedSections': new FormControl('')
    })
  }

}

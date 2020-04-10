import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.scss']
})
export class AddExamComponent implements OnInit {
  examId: string;
  formType: string;
  pageTitle: string;
  errorMessage: string = "";
  successMessage: string = "";
  private ngUnsubscribe = new Subject();
  addExamForm: FormGroup;
  formSubmitAttempt: boolean = false;
  isDisabled: boolean = false;
  isRequired: boolean = false;
  display: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {// On page load
    //to get the query parameter values
    this.route.queryParams.pipe(takeUntil(this.ngUnsubscribe)).subscribe(params => {
      this.examId = params['id'];
      this.formType = params['type'];
    });
    //to create form with validations
    this.createForm();
    //to check whether the form to be created or updated
    if (this.formType == "create") {
      this.pageTitle = "Add Exam";
      this.isDisabled = false;
      this.isRequired = true;
    } else if (this.formType == "edit") {
      this.pageTitle = "Edit Exam";
      this.editControls();
    } else {
      this.pageTitle = "View Details";
      this.isDisabled = true;
      this.isRequired = false;
    }

  }

  createForm() {
    this.addExamForm = this.fb.group({
      'title': new FormControl('', { validators: [Validators.required, Validators.pattern('^([A-Za-z0-9 _\'-])*$')] }),
      'year': new FormControl('', { validators: [Validators.required] })
    });
  }

  editControls(): void {
    this.isRequired = true;
    this.isDisabled = false;
    this.pageTitle = "Edit Teacher";
  }

  addExamSubmit(): void {
    this.errorMessage = "";
    this.successMessage = "";
    this.formSubmitAttempt = true;
    if (this.addExamForm.valid) {
      this.formSubmitAttempt = false;
      console.log(this.addExamForm.value);
      this.addExamForm.reset();
      this.successMessage = "Your changes have been successfully saved";
    }
  }

  resetForm(): void {
    this.addExamForm.reset();
    this.successMessage = "";
  }

  list(): void {
    this.router.navigateByUrl("Exams");
  }

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LazyLoadEvent, SelectItem } from 'primeng/api/public_api';
import { Exams } from 'src/app/cts/shared/models/exams';
import { ExamsService } from 'src/app/cts/shared/services/exams.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss']
})
export class ExamsComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  datasource: Exams[];
  exams: Exams[];
  totalRecords: number;
  cols: any[];
  @ViewChild('myFiltersDiv') myFiltersDiv: ElementRef;
  loading: boolean;
  errorMessage:string="";
  successMessage:string="";
  display:boolean=false;
  position: string;

  constructor(private examsService: ExamsService, private router: Router,private route:ActivatedRoute) {
    this.exams = [];
  }

  public ngOnInit() {
    this.examsService.getExams();
    this.examsService.examsJson.pipe(takeUntil(this.ngUnsubscribe)).subscribe(exams => {
      this.datasource = exams;
      this.totalRecords = this.datasource.length;
    });
    this.cols = [
      { field: 'title', header: 'Title' },
      { field: 'year', header: 'Year' },
      { field: 'createddate', header: 'Created Date' },
      { field: 'createdby', header: 'Created By' }
    ];
    this.loading = true;
  }

  loadCarsLazy(event: LazyLoadEvent) {
    this.loading = true;
    setTimeout(() => {
      if (this.datasource) {
        this.exams = this.datasource.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 1000);
  }

  toggleClass($event: any) {
    if (this.myFiltersDiv.nativeElement.classList.contains('transform-active'))
      this.myFiltersDiv.nativeElement.classList.remove('transform-active')
    else
      this.myFiltersDiv.nativeElement.classList.add('transform-active')
  }

  addNew($event:any){
    // this.router.navigateByUrl("Exams/add-exam?type=create");
    this.router.navigate(['add-exam'], {relativeTo: this.route,queryParams: { type: 'create'}});
  }
  editExam():void{
    // this.router.navigateByUrl("Exams/add-exam?type=edit&id=1");
    this.router.navigate(['add-exam'], {relativeTo: this.route,queryParams: { type: 'edit',id:'1'}});
  }
  deleteExam():void{
    this.position="top";
    this.display=true;
    this.successMessage="";
  }
  examRevoke():void{
    this.display=false;
    this.successMessage="Exam deleted successfully"
  }

}

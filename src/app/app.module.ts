import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './ctc_components/topbar/topbar.component';
import { MenubarComponent } from './ctc_components/menubar/menubar.component';
import { TilesComponent } from './ctc_components/tiles/tiles.component';
import { StudentsComponent } from './ctc_components/students/students.component';
import { TeachersComponent } from './ctc_components/teachers/teachers.component';
import { UsersComponent } from './ctc_components/users/users.component';
import { ExamsComponent } from './ctc_components/exams/exams.component';
import { ClassesComponent } from './ctc_components/classes/classes.component';


// primeng module div section
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';
import {MultiSelectModule} from 'primeng/multiselect';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { StudentlayoutComponent } from './ctc_components/students/studentlayout/studentlayout.component';
import { StudentprofileComponent } from './ctc_components/students/studentprofile/studentprofile.component';
import { StudenteditComponent } from './ctc_components/students/studentedit/studentedit.component';
import { StudentreportsComponent } from './ctc_components/students/studentreports/studentreports.component';
import { StudentmarksComponent } from './ctc_components/students/studentmarks/studentmarks.component';
import { StudentmoreComponent } from './ctc_components/students/studentmore/studentmore.component';
import { AddTeacherComponent } from './ctc_components/teachers/add-teacher/add-teacher.component';
import { AddUserComponent } from './ctc_components/users/add-user/add-user.component';
import { LoginComponent } from './ctc_components/login/login.component';
import { ChangePasswordComponent } from './ctc_components/change-password/change-password.component';
import { SectionsComponent } from './ctc_components/sections/sections.component';
import { DashboardComponent } from './ctc_components/dashboard/dashboard.component';
import { MyProfileComponent } from './ctc_components/my-profile/my-profile.component';
import { RoleAccessComponent } from './ctc_components/role-access/role-access.component';
import { SettingsComponent } from './ctc_components/settings/settings.component';
import { AboutUsComponent } from './ctc_components/about-us/about-us.component';
import { StatisticsComponent } from './ctc_components/statistics/statistics.component';
import { AddStudentComponent } from './ctc_components/students/add-student/add-student.component';
import { AddSectionComponent } from './ctc_components/students/add-section/add-section.component';
import { AddExamComponent } from './ctc_components/exams/add-exam/add-exam.component';
import { AddClassComponent } from './ctc_components/classes/add-class/add-class.component';




@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MenubarComponent,
    TilesComponent,
    StudentsComponent,
    TeachersComponent,
    UsersComponent,
    ExamsComponent,
    ClassesComponent,
    StudentlayoutComponent,
    StudentprofileComponent,
    StudenteditComponent,
    StudentreportsComponent,
    StudentmarksComponent,
    StudentmoreComponent,
    AddTeacherComponent,
    AddUserComponent,
    LoginComponent,
    ChangePasswordComponent,
    SectionsComponent,
    DashboardComponent,
    MyProfileComponent,
    RoleAccessComponent,
    SettingsComponent,
    AboutUsComponent,
    StatisticsComponent,
    AddStudentComponent,
    AddSectionComponent,
    AddExamComponent,
    AddClassComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    TableModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    CommonModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    TabViewModule,
    AccordionModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

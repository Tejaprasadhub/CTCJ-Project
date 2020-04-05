import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './ctc_components/students/students.component';
import { TeachersComponent } from './ctc_components/teachers/teachers.component';
import { UsersComponent } from './ctc_components/users/users.component';
import { ExamsComponent } from './ctc_components/exams/exams.component';
import { ClassesComponent } from './ctc_components/classes/classes.component';
import {SectionsComponent} from './ctc_components/sections/sections.component';
import { StudentlayoutComponent } from './ctc_components/students/studentlayout/studentlayout.component';
import { StudentdetailroutingModule } from './ctc_components/students/studentdetailrouting/studentdetailrouting.module';
import { AddTeacherComponent } from './ctc_components/teachers/add-teacher/add-teacher.component';
import { AddUserComponent } from './ctc_components/users/add-user/add-user.component';
import {AddExamComponent} from './ctc_components/exams/add-exam/add-exam.component';
import {ChangePasswordComponent} from './ctc_components/change-password/change-password.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: 'Students',
    component: StudentsComponent,
    data: { title: 'Students List' },
    children: [
      {
        path: 'student',
        component: StudentlayoutComponent,
        loadChildren: () => import('../app/ctc_components/students/studentdetailrouting/studentdetailrouting.module').then(m => m.StudentdetailroutingModule)
      }
    ]
  },
  {
    path: 'Teachers',
    component: TeachersComponent,
    data: { title: 'Teachers List' }
  },
  {
    path: 'Teachers/add-teacher',
    component: AddTeacherComponent,
    data: { title: 'Teachers List' }
  },
  {
    path: 'Users',
    component: UsersComponent,
    data: { title: 'Users List' }
  },
  {
    path: 'Users/add-user',
    component: AddUserComponent,
    data: { title: 'Users List' }
  },
  {
    path: 'Exams',
    component: ExamsComponent,
    data: { title: 'Exams List' }
  },
  {
    path: 'Exams/add-exam',
    component: AddExamComponent,
    data: { title: 'Exams List' }
  },
  {
    path: 'Classes',
    component: ClassesComponent,
    data: { title: 'Classes List' }
  },
  {
    path: 'Sections',
    component: SectionsComponent,
    data: { title: 'Sections List' }
  },
  {
    path: 'ChangePassword',
    component: ChangePasswordComponent,
    data: { title: 'Change Password' }
  },
  {
    path: '',
    redirectTo: '/Students',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

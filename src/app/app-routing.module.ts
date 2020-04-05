import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './ctc_components/login/login.component';
import { StudentsComponent } from './ctc_components/students/students.component';
import { TeachersComponent } from './ctc_components/teachers/teachers.component';
import { UsersComponent } from './ctc_components/users/users.component';
import { ExamsComponent } from './ctc_components/exams/exams.component';
import { ClassesComponent } from './ctc_components/classes/classes.component';
import { StudentlayoutComponent } from './ctc_components/students/studentlayout/studentlayout.component';
import { StudentdetailroutingModule } from './ctc_components/students/studentdetailrouting/studentdetailrouting.module';
import { AddTeacherComponent } from './ctc_components/teachers/add-teacher/add-teacher.component';
import { AddUserComponent } from './ctc_components/users/add-user/add-user.component';
const routes: Routes = [
  {
    path: 'Students',
    component: StudentsComponent,
    data: { title: 'Students List' },
    children:[
      {
        path: 'student',
        component: StudentlayoutComponent,
        loadChildren:()=>import('../app/ctc_components/students/studentdetailrouting/studentdetailrouting.module').then(m=>m.StudentdetailroutingModule)
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
    path: 'Login',
    component: LoginComponent,
    data: { title: 'Login Details' }
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
    path: 'Classes',
    component: ClassesComponent,
    data: { title: 'Classes List' }
  },
  { path: '',
    redirectTo: '/Userlogin',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

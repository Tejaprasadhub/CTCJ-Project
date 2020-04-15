import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from '../../home/components/students/students.component';
import { TeachersComponent } from '../../home/components/teachers/teachers.component';
import { UsersComponent } from '../../home/components/users/users.component';
import { ExamsComponent } from '../../home/components/exams/exams.component';
import { ClassesComponent } from '../../home/components/classes/classes.component';
import {SectionsComponent} from '../../home/components/sections/sections.component';
import { StudentlayoutComponent } from '../../home/components/students/studentlayout/studentlayout.component';
import { StudentdetailroutingModule } from '../../home/components/students/studentdetailrouting/studentdetailrouting.module';
import { AddTeacherComponent } from '../../home/components/teachers/add-teacher/add-teacher.component';
import { AddUserComponent } from '../../home/components/users/add-user/add-user.component';
import {AddExamComponent} from '../../home/components/exams/add-exam/add-exam.component';
import {ChangePasswordComponent} from '../../home/components/change-password/change-password.component';
import { DashboardComponent } from '../../home/components/dashboard/dashboard.component';
import { EventsComponent } from '../../home/components/events/events.component';
import { from } from 'rxjs';
import { AddEventComponent } from '../../home/components/events/add-event/add-event.component';
import { LayoutComponent } from '../components/layout/layout.component';



const homeRoutes: Routes = [
  {
    path:'Admin',
    component:LayoutComponent,
    children:[
      {
        path: 'Students',
        component: StudentsComponent,
        data: { title: 'Students List' },
        children: [
          {
            path: 'student',
            component: StudentlayoutComponent,
            loadChildren: () => import('../components/students/studentdetailrouting/studentdetailrouting.module').then(m => m.StudentdetailroutingModule)
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
        path: 'events',
        component: EventsComponent,
        data: { title: 'Events List' }
      },
      {
        path: 'Events/add-event',
        component: AddEventComponent,
        data: { title: 'Add Event' }
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
        path: 'Dashboard',
        component: DashboardComponent,
        data: { title: 'Change Password' }
      }
    ]
  }
   
];
@NgModule({
  imports:[
    RouterModule.forChild(homeRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class HomeRoutingModule { }

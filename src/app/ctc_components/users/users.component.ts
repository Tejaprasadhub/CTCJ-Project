import { Component, OnInit } from '@angular/core';
import { cities } from 'src/app/models/cities';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() {

        this.cities1 = [
            {label:'Select User Type', value:null},
            {label:'DataEntryOperator', value:{id:1, name: 'DataEntryOperator', code: 'NY'}},
            {label:'Teacher', value:{id:2, name: 'Teacher', code: 'RM'}},
            {label:'Admin', value:{id:3, name: 'Admin', code: 'LDN'}}
        ];
        this.userstat = [
            {label:'Status', value:null},
            {label:'Active', value:{id:1, name: 'Active', code: 'AC'}},
            {label:'InActive', value:{id:2, name: 'InActive', code: 'InAC'}},
        
        ];

   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  menuItems: MenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.menuItems =[
        {
          "label": "About Us",
          "url": "AboutUs"
        },
        {
          "label": "Date Entry",
          "url": null,
          "items": [
            [
              {
                "label": "Data Entry",
                "items": [
                  {
                    "label": "Students",
                    "url": "Students",
                    "items": []
                  },
                  {
                    "label": "Teachers",
                    "url": "Teachers",
                    "items": []
                  },
                  {
                    "label": "Users",
                    "url": "Users",
                    "items": []
                  },
                  {
                    "label": "Exams",
                    "url": "Exams",
                    "items": []
                  },
                  {
                    "label": "Classes",
                    "url": "Classes",
                    "items": []
                  }
                ]
              }
            ]
          ]
        },
        {
          "label": "Role Access",
          "url": "RoleAccess"
        },
        {
          "label": "Statistics",
          "url": "Statistics"
        },
        {
          "label": "Settings",
          "url": "Settings"
        },
        {
          "label": "Audit Logs",
          "url": "auditlogs"
        }
      ]
  }
}

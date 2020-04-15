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
            ],
            [
              {
                "label": "Additional",
                "items": [
                  {
                    "label": "News",
                    "url": "news",
                    "items": []
                  },
                  {
                    "label": "Achievements",
                    "url": "achivements",
                    "items": []
                  }                  
                ]
              }              
            ]
          ]
        },
        {
          "label": "Role Access",
          "url": "roleaccess"
        },
        {
          "label": "Events",
          "url": "events"
        },
        {
          "label": "Fees",
          "url": "fees"
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

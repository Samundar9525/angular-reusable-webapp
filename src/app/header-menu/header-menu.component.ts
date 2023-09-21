import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  constructor() { }
  menuList = [
    {
      id : 'home',
      text: 'Home',
      path: '',
      subMenu: []
    },
    {
      id : 'about',
      text: 'About',
      path: '',
      subMenu: []
    },
    {
      id : 'dropdownMenu',
      text: 'Dropdowm Menu',
      path: '',
      subMenu: [
        {
          id : 'dropdown-Menu1',
          text: 'Menu 1',
          path: '',
        },
        {
          id : 'dropdown-Menu2',
          text: 'Menu 2',
          path: '',
        },
        {
          id : 'dropdown-Menu3',
          text: 'Menu 3',
          path: '',
        },
        {
          id : 'dropdown-Menu4',
          text: 'Menu 4',
          path: '',
        },
        {
          id : 'dropdown-Menu5',
          text: 'Menu 4',
          path: '',
        }
      ]
    }
  ]

  megaMenu = {
    section0: [
      {
        id: 'imageMenu',
        text:"https://fadzrinmadu.github.io/hosted-assets/responsive-mega-menu-and-dropdown-menu-using-only-html-and-css/img.jpg",
        path: ''
      }
    ],
    section1: [
      {
        id : 'megaMenu1',
        text: 'Section1 menu',
        path: '',
      },
      {
        id : 'megaMenu2',
        text: 'Section1 menu',
        path: '',
      },
      {
        id : 'megaMenu3',
        text: 'Section1 menu',
        path: '',
      },
      {
        id : 'megaMenu4',
        text: 'Section1 menu',
        path: '',
      }
    ],
    section2: [
      {
        id : 'megaMenu5',
        text: 'Section2 menu',
        path: '',
      },
      {
        id : 'megaMenu6',
        text: 'Section2 menu',
        path: '',
      },
      {
        id : 'megaMenu7',
        text: 'Section2 menu',
        path: '',
      },
      {
        id : 'megaMenu8',
        text: 'Section2 menu',
        path: '',
      }
    ],
    section3: [
      {
        id : 'megaMenu9',
        text: 'Section3 menu',
        path: '',
      },
      {
        id : 'megaMenu10',
        text: 'Section3 menu',
        path: '',
      },
      {
        id : 'megaMenu11',
        text: 'Section3 menu',
        path: '',
      },
      {
        id : 'megaMenu12',
        text: 'Section3 menu',
        path: '',
      }
    ]
  }

  ngOnInit(): void {
  }

}

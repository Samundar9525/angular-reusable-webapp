import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  //Sample data to populate table
  public tableHeader = [
    {
      id: 'name',
      text: 'Name'
    },
    {
      id: 'title',
      text: 'Title'
    },
    {
      id: 'status',
      text: 'Status'
    },
    {
      id: 'position',
      text: 'Position'
    },
    {
      id: 'action',
      text: 'Action'
    },

  ]
  public dataSource = [
    {
      imgsrc : "https://ionicframework.com/docs/img/demos/avatar.svg",
      name:'Anonymyous',
      email:'xyz@gmail.com',
      designation:'Developer',
      department:'XyzDepartment',
      position: 'Senior',
      status: 'ACTIVE'

    },
    {
      imgsrc : "https://ionicframework.com/docs/img/demos/avatar.svg",
      name:'Anonymyous',
      email:'xyz@gmail.com',
      designation:'Developer',
      department:'XyzDepartment',
      position: 'Senior',
      status: 'ACTIVE'

    },
    {
      imgsrc : "https://ionicframework.com/docs/img/demos/avatar.svg",
      name:'Anonymyous',
      email:'xyz@gmail.com',
      designation:'Developer',
      department:'XyzDepartment',
      position: 'Senior',
      status: 'ACTIVE'

    },
    {
      imgsrc : "https://ionicframework.com/docs/img/demos/avatar.svg",
      name:'Anonymyous',
      email:'xyz@gmail.com',
      designation:'Developer',
      department:'XyzDepartment',
      position: 'Senior',
      status: 'ACTIVE'

    },{
      imgsrc : "https://ionicframework.com/docs/img/demos/avatar.svg",
      name:'Anonymyous',
      email:'xyz@gmail.com',
      designation:'Developer',
      department:'XyzDepartment',
      position: 'Senior',
      status: 'ACTIVE'

    },{
      imgsrc : "https://ionicframework.com/docs/img/demos/avatar.svg",
      name:'Anonymyous',
      email:'xyz@gmail.com',
      designation:'Developer',
      department:'XyzDepartment',
      position: 'Senior',
      status: 'ACTIVE'

    },{
      imgsrc : "https://ionicframework.com/docs/img/demos/avatar.svg",
      name:'Anonymyous',
      email:'xyz@gmail.com',
      designation:'Developer',
      department:'XyzDepartment',
      position: 'Senior',
      status: 'ACTIVE'

    }

  ]


  constructor() { }
  ngOnInit(): void {
  }

}

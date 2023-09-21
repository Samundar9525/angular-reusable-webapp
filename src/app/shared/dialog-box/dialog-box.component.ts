import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  @Input() headerName = 'Dialog Box';
  @Input() button1Name = 'Save';
  @Input() button2Name = 'Cancel';
  @Input() showButton1 = true;
  @Input() showButton2 = false;
  @Input() height = 100;
  @Input() width = 50;
  @Input() top = 50;
  @Input() left = 50;

  @Input() body = 'Hi I am Body';


  constructor() { }

  ngOnInit(): void {
  }

}

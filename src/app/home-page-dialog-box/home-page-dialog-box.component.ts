import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home-page-dialog-box',
  templateUrl: './home-page-dialog-box.component.html',
  styleUrls: ['./home-page-dialog-box.component.css'],
  animations: [trigger('fadeInOut', [
    state('* => void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(2000)),
  ]),
]
})
export class HomePageDialogBoxComponent implements OnInit {
  title = "";
  body = "";
  text1 = "";
  text2 = "";
  text3 = "";
  text4 = "";
  text5 = "";


  constructor(public dialogRef: MatDialogRef<HomePageDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    // Fetch data from parent component
    this.title = this.data.title;
    this.body = this.data.body;
    this.text1 = this.data.text1;
    this.text2 = this.data.text2;
    this.text3 = this.data.text3;
    this.text4 = this.data.text4;
    this.text5 = this.data.text5;

  }

}

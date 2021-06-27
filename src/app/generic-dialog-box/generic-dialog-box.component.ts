import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-generic-dialog-box',
  templateUrl: './generic-dialog-box.component.html',
  styleUrls: ['./generic-dialog-box.component.css']
})
export class GenericDialogBoxComponent implements OnInit {
  publishedData;
  constructor(
    public dialogRef: MatDialogRef<GenericDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    var availableQty;
    var ageLimit;
    var locations;

    availableQty = this.data.available_capacity;
    ageLimit = this.data.min_age_limit;
    locations = this.data.place;

    this.publishedData = [];

    console.log("Data received by dialog box");
    console.log(availableQty);
    console.log(ageLimit);
    console.log(locations);
    for(var i = 0; i < availableQty.length; i++)
    {
      this.publishedData.push({
        "availableQty": availableQty[i],
        "ageLimit": ageLimit[i],
        "locations": locations[i]
      })
    }
  }

}

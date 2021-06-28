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
    /*
      Called when a dialog box is created
     */
    var availableQty;
    var ageLimit;
    var locations;

    // Receive data fetched from API
    availableQty = this.data.available_capacity;
    ageLimit = this.data.min_age_limit;
    locations = this.data.place;

    this.publishedData = [];

    // Convert data into a dictionary format.
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

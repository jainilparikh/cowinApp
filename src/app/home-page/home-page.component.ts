import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from '@angular/material/dialog';
import { GenericDialogBoxComponent } from '../generic-dialog-box/generic-dialog-box.component';
import { interval } from 'rxjs';
import {formatDate} from '@angular/common';
import { Howl } from 'howler';
import {ChangeDetectorRef} from '@angular/core';
import { IpConfig } from '../../cowinAPIs';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { HomePageDialogBoxComponent } from '../home-page-dialog-box/home-page-dialog-box.component';
import { SplashScreenStateService } from '../services/splash-screen-state-service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
      trigger('show', [
        transition('void <=> *', [
          style({
            opacity:0,
            backgroundColor: 'yellow'
          }),
          animate(10000)
        ])
    ]),
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(2000)),
    ]),
  ]
})
export class HomePageComponent implements OnInit {
  intervalId;
  subscribe;
  date;
  sound;

  constructor(private http:HttpClient, public dialog: MatDialog, public ref: ChangeDetectorRef, private splashScreenStateService: SplashScreenStateService) { }

   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
    }

  async ngOnInit(): Promise<void> {
    /*
      Called when page is reloaded
     */

    // Get recent date
      this.date = (formatDate(new Date(), 'dd-MM-yyyy', 'en'));
      // Alert Sound
      this.sound = new Howl({                  
        src: ['./assets/audio/notification.mp3']
      });

      setTimeout(() => {
        this.splashScreenStateService.stop();
      }, 5000);

      await this.delay(5000);
      // Open Dialog box to show results from API.
     const dialogRef = this.dialog.open(HomePageDialogBoxComponent, {
      data: {
        "title": "Welcome to SLOTz",
        "body": "To view slots please fill in your area pincode. Keep the application open on a sepearate tab. We wiil check for slots in the provided pincode every 15 seconds. Once a slot is found a notification sound will inform you of slot availability.",
      },
      height: '400px',
      width: '600px',
    });
    
  }

  getPincode($event) : any {
    /*
     Fetches PinCode from the user and calls the fetchdetails function
    */
      var pincode = $event.target.value;
      
      $event.target.value = "";
      this.ref.detectChanges();

      // Open Dialog box when user input is accepted.
      const dialogRef = this.dialog.open(GenericDialogBoxComponent, {
        data: {
          "text": "Request Successfully Accepted! Due to constraints with the CoWin API's please keep the tab open so the website can sync with the servers You will receive an Alert when slots are available",
          "available_capacity": false,
          "min_age_limit": false
        }
      });

      this.fetchDetails(pincode);

      // Schedule calling the API for every 15 seconds
      const source = interval(15000);
      this.subscribe = source.subscribe(val => this.fetchDetails(pincode));
  }

  fetchDetails(pincode): any {
    /*
      It fetches the results from CoWIN API and passes the results to a dialog box
     */
    var availableQty;
    var ageLimit;
    var locations;
    var headers = {
    }

    //Call CoWin API
    var obj = new IpConfig();
    this.http.get(obj.ipconfig['GET_PLACES_BY_PINCODE'] + pincode + "&date=" + this.date,
    {headers}).subscribe(
      (data) => 
      {
        console.log(data)
        locations = []
        availableQty = []
        ageLimit = []

        // Iterate over JSON returned by the API and fetch useful information
        for(var i = 0; i < data['centers'].length; i++)  
          {
            var sessions = data['centers'][i]['sessions'];
            console.log("Location array to be flled");
            locations.push(data['centers'][i]['name']);
            console.log("Location array is filled");
            for(var j = 0; j < sessions.length; j++)
            {
              var capacity = sessions[j]['available_capacity'];
              console.log(sessions[j]['available_capacity']);
              
              console.log(capacity);
              
              // Checks if available slots at any center is > 0
              if( capacity > 0)
                {
                  availableQty.push( sessions[j]['available_capacity'] );
                  ageLimit.push( sessions[j]["min_age_limit"] );
                  break;
                }
            }
          }

          if( availableQty.length > 0)
          {
            this.sound.play();
            this.subscribe.unsubscribe();

            // Open Dialog box to show results from API.
            const dialogRef = this.dialog.open(GenericDialogBoxComponent, {
              data: {
                "text": "Slots Found",
                "available_capacity": availableQty,
                "min_age_limit": ageLimit,
                "place": locations
              },
              height: '400px',
              width: '600px',
            });
          }
      });

    return 'pincode Found';
  }

}

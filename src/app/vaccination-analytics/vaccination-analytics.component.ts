import { Component, OnInit } from '@angular/core';
import { SplashScreenStateService } from '../services/splash-screen-state-service';
import { VaccinationAnalyticsService } from './vaccination-analytics.service'
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-vaccination-analytics',
  templateUrl: './vaccination-analytics.component.html',
  styleUrls: ['./vaccination-analytics.component.css']
})
export class VaccinationAnalyticsComponent implements OnInit {
  noOfVaccinatedD1;
  noOfVaccinatedD2;
  chart;
  chart2;
  population;
  pending;
  noOfDistCases;  

  constructor(private VaccinationAnalyticsService: VaccinationAnalyticsService, private splashScreenStateService: SplashScreenStateService) { }

  ngOnInit(): void {
    /*
    First Function to be called when page loads
    Fetches KA data from the API by default
     */
    this.splashScreenStateService.stop();

    this.VaccinationAnalyticsService.getStateWiseData().subscribe(res => {
      
      console.log(res);
      this.noOfVaccinatedD1 = res['KA']['total']['vaccinated1'];
      this.noOfVaccinatedD2 = res['KA']['total']['vaccinated2'];
      this.population = res['AP']['meta'].population;
      this.pending = this.population - (this.noOfVaccinatedD1 + this.noOfVaccinatedD2);

      console.log(this.noOfVaccinatedD1);
      console.log(this.noOfVaccinatedD2);
      console.log(this.population);

      this.makeCharts();

    });
    this.fetchDistrictData('KA');
    
  }

  fetchStateData(stateName)
  {
    /*
      Fetch data from API
     */
    this.VaccinationAnalyticsService.getStateWiseData().subscribe(res => {
      
      console.log(res);
      this.noOfVaccinatedD1 = res[stateName]['total']['vaccinated1'];
      this.noOfVaccinatedD2 = res[stateName]['total']['vaccinated2'];
      this.population = res[stateName]['meta'].population;
      this.pending = this.population - (this.noOfVaccinatedD1 + this.noOfVaccinatedD2);

      console.log(this.noOfVaccinatedD1);
      console.log(this.noOfVaccinatedD2);
      console.log(this.population);

      this.makeCharts();

    });
    
  }

  fetchDistrictData(stateName)
  {
    /*
      Fetch data from API
     */
    var cnt = 0;
    this.noOfDistCases = [];
    this.VaccinationAnalyticsService.getStateWiseData().subscribe(res => {

      var noOfDistricts = res[stateName]['districts'];
      var districts = Object.keys(noOfDistricts)
      
      for(var i of districts) {
        this.noOfDistCases.push(noOfDistricts[i]['total']['confirmed']);
        
        if( cnt == 4)
        {
          break;
        }
        cnt = cnt + 1;
      }

     // this.makeCharts();

    });
    
  }

  onStateSelection(state)
  {
    /*
      Fetch statename from option menu
     */
    this.chart.destroy();
    var stateName = state.target.value;
    this.fetchStateData(stateName);
  }

  makeCharts()
  {
    /*
      Initialize the pie chart
     */
    this.chart = new Chart('pievalue', {
      type: 'doughnut',
      data: {
        labels: ['First Dose Administered', 'Second Dose Administered', 'Pending'],
        datasets: [
          {
            label: 'Points',
            backgroundColor: ['#83a7cc','#376ba1', '#bf4739'],
            data: [this.noOfVaccinatedD1, this.noOfVaccinatedD2, this.pending]
          }
        ]
      }
    });

    this.chart2 = new Chart('pievalue2', {
      type: 'doughnut',
      data: {
        labels: ['First Dose Administered', 'Second Dose Administered', 'Pending'],
        datasets: [
          {
            label: 'Points',
            backgroundColor: ['#83a7cc', '#bf4739'],
            data: [170000000, 1210000000]
          }
        ]
      }
    });
  }

}

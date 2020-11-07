import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AnalyticsComponent implements OnInit {

  constructor() { }



  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      text: 'Patient Visits',
      display: true
    },
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Day'
        },
        gridLines: {
          display:false
      }
      }],
      yAxes: [{
        gridLines: {
            display:false
        }   
    }]
    },
    legend: {
      display: true,
      labels: {
        boxWidth: 15,

      }
    }
  };
  // CHART 2
  public barChartOptions2 = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      text: 'Patient Appointments',
      display: true
    },
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,

          labelString: 'Day'
        },
        gridLines: {
          display:false
      }
      }],
      yAxes: [{
        gridLines: {
            display:false
        }   
    }]
    },
    legend: {
      display: true,
      labels: {
        boxWidth: 15,

      }
    }
  };
  // OLD PATIENT CHART
  public barChartOptions3 = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      text: 'Patient Appointments',
      display: true
    },
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,

          labelString: 'Day'
        },
        gridLines: {
          display:false
      }
      }],
      yAxes: [{
        gridLines: {
            display:false
        }   
    }]
    },
    legend: {
      display: true,
      labels: {
        boxWidth: 15,

      }
    }
  };
  // CANCELED VS NON CANCELLED
  public barChartOptions4 = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      text: 'Cancelledd vs Non-Cancelled Activities',
      display: true
    },
    scales: {
      xAxes: [{
        ticks: {
          stepSize: 1,
          beginAtZero: true
        },
        gridLines: {
          display:false
      }
      }],
      yAxes: [{
        gridLines: {
            display:false
        }   
    }]
    },
    legend: {
      display: true,
      labels: {
        boxWidth: 15,

      }
    }
  };
  // END OF OPTIONS
  public barChartType = 'bar';
  public barChartType4 = 'horizontalBar';

  public barChartLegend = true;

  public barChartLabels = ['01', '02', '03', '04', '05', '06', '07'];
  public barChartLabels2 = ['01', '02', '03', '04', '05', '06', '07'];
  public barChartLabels4 = ["Cardiology", "Ward"];

  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Previous Week' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Current Week' }
  ];

  public barChartData2 = [
    { data: [35, 59, 22, 81, 56, 55, 40], label: 'Previous Week' },
    { data: [78, 48, 34, 49, 86, 27, 90], label: 'Current Week' }
  ];

  public barChartData3 = [
    { data: [11, 24, 14, 22, 14, 1, 10], label: 'old patient' },
    { data: [22, 14, 33, 12, 14, 5, 20], label: 'new patient' }
  ];

  public barChartData4 = [
    { data: [3, 5], label: 'Cancelled' },
    { data: [1, 3], label: 'Non-cancelled' }
  ];

  public colors = [
    { backgroundColor: "#c2def6" },
    { backgroundColor: "#5d67ea" },
    { backgroundColor: "blue" },
    { backgroundColor: "yellow" }
  ];





  ngOnInit(): void {
  }

}

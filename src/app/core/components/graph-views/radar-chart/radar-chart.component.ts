import { Component } from '@angular/core';
import { Chart, RadarController } from 'chart.js/auto';

@Component({
  selector: 'radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent {
  public radarChart: any;

  ngOnInit() {
    this.createRadarChart()
  }

  createRadarChart() {
    this.radarChart = new Chart("radarChart", {
      type: 'radar', // This denotes the type of chart

      data: {
        labels: ['Poor', 'Urban Poor','Women','Children','Indigenous People','LGBTQIA+', 'PWD', 'Mentally Ill', 'Senior Citizen', 'Broken Family', 'Orphans', 'Out-of-School Youth', 'Prisoners', 'Unemployed', 'Others'],
        datasets: [
          {
            label: 'Asia-Pacific',
            data: [779, 809, 868, 626, 480, 476, 245, 874, 802, 331, 827, 327, 173, 534, 470],
            backgroundColor: ['rgba(255, 87, 51, 0.5)'],
            borderColor: ['rgba(255, 87, 51, 1)'], 
            pointBackgroundColor: "#C41E00"
          },
          {
            label: 'Africa',
            data: [333, 495, 15, 892, 194, 587, 372, 921, 582, 993, 566, 878, 427, 730],
            backgroundColor: ['rgba(52, 168, 83, 0.5)'],
            borderColor: ['rgba(52, 168, 83, 1)'], 
            pointBackgroundColor: "#205F14"
          },
          {
            label: 'Europe',
            data: [873, 223, 433, 636, 643, 666, 877, 278, 832, 587, 215, 869, 592, 203, 191],
            backgroundColor: ['rgba(66, 133, 244, 0.5)'],
            borderColor: ['rgba(66, 133, 244, 1)'], 
            pointBackgroundColor: "#0F243E"
          },
          {
            label: 'Latin America',
            data: [727, 852, 400, 529, 130, 406, 562, 849, 713, 279, 354, 750, 399, 118, 131],
            backgroundColor: ['rgba(255, 64, 129, 0.5)'],
            borderColor: ['rgba(255, 64, 129, 1)'], 
            pointBackgroundColor: "#99002A"
          },
          {
            label: 'North America',
            data: [283, 628, 856, 457, 546, 299, 194, 547, 241, 495, 107, 345, 458, 849, 111],
            backgroundColor: ['rgba(255, 215, 0, 0.5)'],
            borderColor: ['rgba(255, 215, 0, 1)'], 
            pointBackgroundColor: "#704D00"
          }
        ]
      },
      options: {
        aspectRatio: 3,
        scales: {
          r: {
            angleLines: {
              color: 'rgba(0, 0, 0, 0.1)', 
            },
            grid: {
            color: 'rgba(0, 0, 0, 0.1)', 
            },
            pointLabels: {
              font: {
                size: 12,
                weight: 'bold'
              }
            }
          }
        }
      }
    });
  }
}

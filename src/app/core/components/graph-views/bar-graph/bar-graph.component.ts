import { Component, Input } from '@angular/core';
import { Chart, BarController } from 'chart.js/auto';

@Component({
  selector: 'bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent {
  @Input() view = 0;
  public barGraph: any;
  ls: any
  dt: any
  lbl: any
  colors: any

  ngOnInit(): void {
    this.createChart()
    console.log(this.view)
  }

  // onClick() {
  //   viewSelectNum = 2
  // }

  createChart() {
    if (this.view == 0) /* Regions */ {
      this.ls = ['Asia-Pacific', 'Africa', 'Europe', 'North America', 'Latin America'];
      this.dt = [300, 240, 100, 432, 253];
      this.lbl = ['Number of Projects']
      this.colors = ['red', 'blue', 'green', 'yellow', 'orange']
    } 
    else if (this.view == 1) /* Marg. Sector */ {
      this.ls = ['Poor', 'Urban Poor','Women','Children','Indigenous People','LGBTQIA+', 'PWD', 'Mentally Ill', 'Senior Citizen', 'Broken Family', 'Orphans', 'Out-of-School Youth', 'Prisoners', 'Unemployed', 'Others'];
      this.dt = [300, 240, 100, 432, 253, 34, 123, 565, 245, 463, 256, 653, 125, 564, 523];
      this.lbl = ['Number of Projects']
      this.colors = [
        '#ff0000',
        '#ffcccc',
        '#00ff00',
        '#ffff00',
        '#ffff80',
        '#0000ff',
        '#cf27f1', 
        '#89dd28', 
        '#0f003d', 
        '#ac4fd2',
        '#259011',
        '#896fab',
        '#f0c8c7',
        '#5bbbcd',
        '#ffbbcd'
      ]
    }
    else if (this.view == 2) /* Curr. Elements */ {
      this.ls = ['Service Learning', 'Challenge-based', 'Reach-In', 'Reach-Out', 'Co-curricular', 'Class Project', 'Research Project', 'BS/AB', 'MS/MA', 'PhD Thesis'];
      this.dt = [300, 240, 100, 432, 253, 565, 245, 256, 653];
      this.lbl = ['Number of Projects']
      this.colors = [
        '#ff0000',
        '#ffcccc',
        '#00ff00',
        '#ffff00',
        '#ffff80',
        '#0000ff',
        '#cf27f1', 
        '#89dd28', 
        '#0f003d', 
        '#ac4fd2',
        '#259011',
        '#896fab',
        '#f0c8c7',
        '#5bbbcd',
        '#ffbbcd'
      ]
    }
    else if  (this.view == 3) /* Member Types */ {
      this.ls = ['Brothers / Aspirants', 'Researchers', 'Professionals', 'Teachers/Professors', 'Support Staff', 'School Leaders', 'Kindergarten', 'Grade School', 'High School', 'College', 'Post-Grad', 'Alumni', 'Parents', 'Volunteers']
      this.dt = [680, 840, 411, 317, 895, 152, 630, 250, 420, 604, 763, 839, 418, 443];
      this.lbl = ['Number of Projects']
      this.colors = [
        '#ff0000',
        '#ffcccc',
        '#00ff00',
        '#ffff00',
        '#ffff80',
        '#0000ff',
        '#cf27f1', 
        '#89dd28', 
        '#0f003d', 
        '#ac4fd2',
        '#259011',
        '#896fab',
        '#f0c8c7',
        '#5bbbcd',
        '#ffbbcd'
      ]
    }
    else if (this.view == 4) /* Engagement Types */ {
      this.ls = ['Poverty Alleviation', 'Medical Mission', 'Alternative Learning', 'Skills Upgrade', 'Social Entrepreneurship', 'Home/Upgrade', 'Water', 'Electricity', 'School', 'Improvement', 'Equipment', 'Infrastructure', 'Communication', 'Wellness', 'Others']
      this.dt = [703, 697, 746, 493, 812, 480, 738, 208, 204, 415, 232, 350, 797, 224, 293];
      this.lbl = ['Number of Projects']
      this.colors = ["#FF5733", "#34A853", "#6F2DBD", "#00BFFF", "#FFD700", "#4CAF50", "#FF4081", "#4285F4", "#FF6347", "#AB47BC", "#FFC107", "#03A9F4", "#E91E63", "#8BC34A", "#673AB7"]
    }

    this.barGraph = new Chart("barGraph", {
      type: 'bar', // This denotes the type of chart

      data: {
        labels: this.ls,
        // To be used on the chart
        datasets: [{
          label: this.lbl/*'Service Learning'*/,
          data: this.dt/*[300]*/,
          backgroundColor: this.colors, /*'#ff0000'*/
          
        },
          /*
          {
            label: 'Challenge-based Learning',
            data: [240],
            backgroundColor: '#ffcccc'
          },

          {
            label: 'Reach-In',
            data: [100],
            backgroundColor: [
              '#00ff00',
            ],
          },

          {
            label: 'Reach-Out',
            data: [432],
            backgroundColor: [
              '#ffff00'
            ],
          },

          {
            label: 'Co-curricular',
            data: [253],
            backgroundColor: [
              '#ffff80'
            ],
          },

          {
            label: 'Class Project',
            data: [340],
            backgroundColor: [
              '#0000ff'
            ],
          },

          {
            label: 'Research Project',
            data: [123],
            backgroundColor: [
              '#cf27f1'
            ],
          },

          {
            label: 'BS/AB Thesis',
            data: [565],
            backgroundColor: [
              '#89dd28'
            ],
          },

          {
            label: 'MS/MA Thesis',
            data: [245],
            backgroundColor: [ 
              '#0f003d'
            ],
          },

          {
            label: 'PhD Thesis',
            data: [463],
            backgroundColor: [ 
              '#ac4fd2'
            ],
          } */
        ]},
      options: {
        aspectRatio: 2,
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
}

import { AUTO_STYLE } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  @Input() view = 1;
  public pieChart: any
  ls: any;
  dt: any;
  lbl: any
  colors: any;
  
  ngOnInit(): void {
    this.createChart()
  }

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
      this.ls = ['Brothers / Aspirants', 'Researchers', 'Teachers/Professors', 'Support Staff', 'Kindergarten', 'Grade School', 'High School', 'College', 'Post-Grad', 'Alumni', 'Parents', 'Volunteers']
      this.dt = [680, 840, 411, 317, 895, 152, 630, 420, 604, 763, 839, 418];
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
      this.ls = ['Poverty Alleviation', 'Medical Mission', 'Alternative Learning', 'Skills Upgrade', 'Social Entrepreneurship', 'Home/Upgrade', 'Utilities', 'School', 'Equipment', 'Infrastructure', 'Others']
      this.dt = [703, 697, 746, 493, 812, 480, 738, 208, 204, 415, 232];
      this.lbl = ['Number of Projects']
      this.colors = ["#FF5733", "#34A853", "#6F2DBD", "#00BFFF", "#FFD700", "#4CAF50", "#FF4081", "#4285F4", "#FF6347", "#AB47BC", "#FFC107"]
    }

    this.pieChart = new Chart("pieChart", {
      type: 'pie', // This denotes the type of chart

      data: {// values on X-Axis
        labels: this.ls,

        // To be used on the chart
        datasets: [{
          label: this.lbl[0],    // Slice Description when hovered
          data: this.dt,    // number to be divided into slices
          backgroundColor: this.colors,                     // Colors to correspons with the data
          hoverOffset: 30        // Distance of the slice from chart center when hovered
        }],
      },
      options: {
        aspectRatio: 2
      }
    });
  }
}

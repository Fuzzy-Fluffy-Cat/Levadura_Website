import { Component } from '@angular/core';
import { Chart, BarController } from 'chart.js/auto';

@Component({
  selector: 'stacked-bar-graph',
  templateUrl: './stacked-bar-graph.component.html',
  styleUrls: ['./stacked-bar-graph.component.css']
})
export class StackedBarGraphComponent {
  public stackedBarGraph: any;

  ngOnInit(): void {
    this.createChart()
  }

  createChart() {
    this.stackedBarGraph = new Chart("stackedBarGraph", {
      type: 'bar', // This denotes the type of chart

      data: {
        // labels: [],
        labels: ['Asia-Pacific', 'Africa', 'Europe', 'North America', 'Latin America'],
        
        // To be used on the chart
        datasets: [{
          label: 'Poverty Alleviation',
          data: [508, 619, 353, 89, 366],
          backgroundColor: '#ff0000'
          },
          {
            label: 'Medical Mission',
            data: [419, 789, 784, 181, 49],
            backgroundColor: '#ffcccc'
          },
          {
            label: 'Alternative Learning',
            data: [407, 333, 166, 390, 616],
            backgroundColor: '#d472d9'
          },
          {
            label: 'Skills Upgrade',
            data: [933, 211, 437, 418, 128],
            backgroundColor: '#05607b'
          },
          {
            label: 'Social Entrepreneurship',
            data: [899, 187, 770, 88, 734],
            backgroundColor: '#661b3d'
          },
          {
            label: 'Home/Upgrade',
            data: [393, 786, 907, 636, 55],
            backgroundColor: '#63ebc6'
          },
          {
            label: 'Water',
            data: [746, 86, 357, 473, 629],
            backgroundColor: '#cb1892'
          },
          {
            label: 'Electricity',
            data: [666, 88, 525, 630, 463],
            backgroundColor: '#389f0e'
          },
          {
            label: 'School',
            data: [636, 752, 960, 110, 777],
            backgroundColor: '#c09477'
          },
          {
            label: 'Improvement',
            data: [594, 684, 711, 287, 56],
            backgroundColor: '#9b6b8a'
          },
          {
            label: 'Equipment',
            data: [58, 116, 674, 356, 51],
            backgroundColor: '#821354'
          },
          {
            label: 'Infrastructure',
            data: [376, 792, 190, 770, 685],
            backgroundColor: '#d585b1'
          },
          {
            label: 'Communication',
            data: [674, 994, 887, 194, 761],
            backgroundColor: '#f25181'
          },
          {
            label: 'Wellness',
            data: [721, 681, 806, 421, 923],
            backgroundColor: '#e36f6f'
          },
          {
            label: 'Others',
            data: [171, 959, 439, 149, 637],
            backgroundColor: '#79969a'
          }
        ]},
      options: {
        aspectRatio: 3,
        scales: {
          x: {
            stacked: true
          },
          y: {
            stacked: true
          }
        }
      }
    });
  }
}

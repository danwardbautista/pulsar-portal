import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  currentDate = new Date();

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'August',
      'September',
      'October',
      'November',
      'December',
      'January',
      'February',
      'March',
    ],
    datasets: [
      {
        data: [44, 40, 70, 65, 54, 87, 64, 71],
        label: 'Activity',
        fill: true,
        tension: 0.5,
        borderColor: 'white',
        backgroundColor: 'rgba(8, 92, 156)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend = true;

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };
  public pieChartLabels = ['Media', 'Navigation', 'Communication'];
  public pieChartDatasets = [{
    data: [200, 350, 150],
    backgroundColor: ['#089c9c', '#08509c', '#70089c']
  }];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  totalUsers: number = 1000;
  activeUsers: number = 750;
  revenue: number = 125000;
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css'],
})
export class DoughnutChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public doughnutChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    fill: false,
    title: {
      display: true,
      text: 'Doughnut Chart',
    },
  };

  public doughnutChartLabels = [
    'Sales Q1',
    'Sales Q2',
    'Sales Q3',
    'Sales Q4',
    'Sales Q5',
  ];
  public doughnutChartData = [120, 150, 180, 90, 23];
  public doughnutChartType = 'doughnut';
}

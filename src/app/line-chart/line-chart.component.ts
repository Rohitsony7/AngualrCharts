import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,

    title: {
      display: true,
      text: 'Line Chart',
    },
  };

  public lineChartLabels = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  public lineChartType = 'line';
  public lineChartLegend = true;

  public lineChartData = [
    { data: [65, 59, 80, 81, -56, -55, -40], label: 'Series A', fill: true },
    { data: [28, 48, -40, -19, 86, 27, 90], label: 'Series B', fill: true },
  ];
}

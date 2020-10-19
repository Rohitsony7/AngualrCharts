import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polar-area',
  templateUrl: './polar-area.component.html',
  styleUrls: ['./polar-area.component.css'],
})
export class PolarAreaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public polarChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    title: {
      display: true,
      text: 'Polar Area Chart',
    },
  };

  public polarChartLabels = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  public polarChartType = 'polarArea';
  public polarChartLegend = true;

  public polarChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  ];
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarchartComponent } from './barchart/barchart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PolarAreaComponent } from './polar-area/polar-area.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';

const routes: Routes = [
  {
    path: 'bar-chart',
    component: BarchartComponent,
  },
  {
    path: 'doughnut-chart',
    component: DoughnutChartComponent,
  },
  {
    path: 'radar-chart',
    component: RadarChartComponent,
  },
  {
    path: 'pie-chart',
    component: PieChartComponent,
  },
  {
    path: 'line-chart',
    component: LineChartComponent,
  },
  {
    path: 'PolarArea-chart',
    component: PolarAreaComponent,
  },
  { path: '**', component: BarchartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doashboard',
  templateUrl: './doashboard.component.html',
  styleUrls: ['./doashboard.component.css'],
})
export class DoashboardComponent implements OnInit {
  constructor() {}

  public chartLabels = ['January', 'February', 'March', 'April', 'May', 'June'];
  public chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Line Chart',
    },
  };
  public chartData = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Series A' },
    { data: [65, 60, 68, 67, 66, 65], label: 'Series B' },
  ];

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public chartData = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Series A' },
    { data: [65, 60, 68, 67, 66, 65], label: 'Series B' },
  ];

  public chartLabels = ['January', 'February', 'March', 'April', 'May', 'June'];

  public chartOptions = {
    responsive: true,
    title: {
      display: true,
      text: 'Line Chart',
    },
  };
}

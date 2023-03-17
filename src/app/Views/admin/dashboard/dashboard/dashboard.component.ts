import { Component } from '@angular/core';
import { Chart,registerables } from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  chart:any ;
  ngOnInit():void{
    this.chart=document.getElementById('my_chart')
  
   
    Chart.register(...registerables)
   
   this.loadChart();
  this.loadChart2();
  }
  loadChart() : void{
    new Chart(this.chart,{
      type: 'doughnut',
      data : {
        datasets: [{
            data: [10, 20  ]
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            
            'man',
            'female'
        ]
    }
    })
  
  }
  loadChart2(): void {
    const canvas = document.getElementById('chart-2') as HTMLCanvasElement;
  
    new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Sales',
          data: [10, 20, 30, 15, 25, 35, 20],
          backgroundColor: '#36A2EB'
        }]
      },
      options: {
       
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }
  
  
}

  
  





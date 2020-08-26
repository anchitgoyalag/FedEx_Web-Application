import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Graphbook} from "./models/graphbook";
import { ApiService } from '../api.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {


  constructor(private apiService: ApiService) { }

  graphbooks: Graphbook[] = [];
  dataRefresher: any;
  set2=[0,0,0,0,0,0,0,0,0,0];
  set3=[0,0,0,0,0,0,0,0,0,0];
  label=[];
  barChart;
  monthL =[];
  from = '0';
  v1=[0,0,0,0,0,0,0,0,0,0];
  toMonth = '7';
  k=0;


  ngOnInit() {
    this.apiService.getalldata().subscribe(
      res => {
        this.graphbooks = res;
        for (var i=0; i<this.graphbooks.length;i++){
          if (this.label.indexOf(this.graphbooks[i].snapshotTsp)==-1){
            this.label.push(this.graphbooks[i].snapshotTsp);
            this.monthL.push({
              month1:  this.graphbooks[i].snapshotTsp,
              value: this.k
            })
            this.k+=1;
          }
          if(this.graphbooks[i].type=='ISSCPREP'){
            for (var j=0; j<this.label.length;j++){
              if (this.graphbooks[i].snapshotTsp==this.label[j]){
                this.v1[j]=this.v1[j]+this.graphbooks[i].diff;
              }
            }}
            
        else if(this.graphbooks[i].type=='OPRPREP'){
          for (var j=0; j<this.label.length;j++){
            if (this.graphbooks[i].snapshotTsp==this.label[j]){
              this.set2[j]=this.set2[j]+this.graphbooks[i].diff;
            }
          }}
        else if(this.graphbooks[i].type=='OPFSCAN'){
          for (var j=0; j<this.label.length;j++){
            if (this.graphbooks[i].snapshotTsp==this.label[j]){
              this.set3[j]=this.set3[j]+this.graphbooks[i].diff;
            }
          }}}
        for (var k=0; k<this.v1.length;k++){
          this.v1[k]=this.v1[k]/3;
        }
        for (var k=0; k<this.set2.length;k++){
          this.set2[k]=this.set2[k]/3;
        }
        for (var k=0; k<this.set3.length;k++){
          this.set3[k]=this.set3[k]/300;
        }
        this.barChart = new Chart('bar', {
          type: 'line',
          options: {
            responsive: true,
            title: {
              display: true
            },
          },
          data: {
            labels: this.label,
            datasets: [
              {
                type: 'line',
                lineTension: 0, 
                label: 'ISSCPREP',
                data: this.v1,
                backgroundColor: '#4D148C',
                borderColor: '#4D148C',
                fill: false,
              }, {
                type: 'line',
                label: 'OPRPREP',
                lineTension: 0, 
                data: this.set2,
                backgroundColor: '#fa7c28',
                borderColor: '#fa7c28',
                fill: false,
              },
              {
                type: 'line',
                label: 'OPFSCAN',
                lineTension: 0, 
                data: this.set3,
                backgroundColor: '#808080',
                borderColor: '#808080',
                fill: false,
              }
            ]
          }
        });
        
      },
       err => {
        alert("An error has occcured");
        return false;
      }

    );

    
  }
 
  removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
      dataset.data.pop();
    });
    chart.update();
  }

  updateChartData(chart, data, dataSetIndex) {
    chart.data.datasets[dataSetIndex].data = data;
    chart.update();
  }
  applyDateFilter(){
    this.barChart.data.labels = this.label.slice(parseInt(this.from), parseInt(this.toMonth) + 1);
    this.barChart.data.datasets[0].data = this.v1.slice(parseInt(this.from), parseInt(this.toMonth) + 1);
    this.barChart.data.datasets[1].data = this.set2.slice(parseInt(this.from), parseInt(this.toMonth) + 1);
    this.barChart.data.datasets[2].data = this.set3.slice(parseInt(this.from), parseInt(this.toMonth) + 1);
    this.barChart.update();
  }


}
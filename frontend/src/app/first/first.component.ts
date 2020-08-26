import { Component, OnInit, Testability } from '@angular/core';
import {Graphbook} from "./models/graphbook";
import { ApiService } from '../api.service';
import { Location } from '@angular/common';
import { GraphComponent } from '../graph/graph.component';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})


export class FirstComponent implements OnInit {
  columns = ["Jobs","Backlog"];
  index = ["job", "diff"];


  graphbooks: Graphbook[] = [];
  snapbook: Graphbook[] = [];
  label=[];
  dataRefresher: any;
  signal1='';
  count=0;
  i=0;
  fsig='';
  test: String[] =[];
  
  
  constructor(private apiService: ApiService, private location: Location) { }
  

  ngOnInit() {
    this.getalldata();
    
    this.refreshData();
  }
  
  
  goBack() {
    // window.history.back();
    this.location.back();
  }

  public getalldata(){
    this.apiService.getalldata().subscribe(
      res => {
        this.graphbooks = res;
        for (var i=0; i<this.graphbooks.length;i++){
          if (this.label.indexOf(this.graphbooks[i].snapshotTsp)==-1){
            this.label.push(this.graphbooks[i].snapshotTsp);
          }}
          this.apiService.getsnapdata(this.label[this.label.length-1]).subscribe(
            res => {
              this.snapbook = res;
            },
      
            err => {
              alert("An error has occcured");
              return false;
            }
      
          );
        
        for (var i=0; i<this.graphbooks.length;i++){
          if(this.graphbooks[i].type=='ISSCPREP'){
          if (this.graphbooks[i].diff<10){
            this.test.push("G");}
          else{
            this.test.push("R");
          }}}
          	        this.count = this.test.length;
          	        while (this.count!=0){
          	          if((this.test[this.i]=='R'|| this.test[this.i+1]=='R'||this.test[this.i+2]=='R')&&(this.signal1=="RED"||this.fsig=="YELLOW(U)")){
          	            this.signal1="RED";
          	          }
          	          else if((this.test[this.i]=='R'|| this.test[this.i+1]=='R'||this.test[this.i+2]=='R')&&(this.signal1=="GREEN"||this.signal1==''||this.fsig=="YELLOW(D)")){
                      this.signal1="YELLOW";
                      this.fsig = "YELLOW(U)";
                      }
          	          else if((this.test[this.i]=='G'&& this.test[this.i+1]=='G'&& this.test[this.i+2]=='G')&&(this.fsig=="YELLOW(U)"||this.signal1=="RED")){
                        this.signal1="YELLOW";
                        this.fsig = "YELLOW(D)";
                        
          	          }
          	          else if((this.test[this.i]=='G'&& this.test[this.i+1]=='G'&&this.test[this.i+2]=='G')&&(this.fsig=="YELLOW(D)"||this.signal1=='')){
          	            this.signal1="GREEN";
          	          }
          	          
          	          this.i=this.i+3;
          	          this.count=this.count-3;
                    }
      },
       err => {
        alert("An error has occcured");
        return false;
      }

    );
  }

  
  refreshData(){
    this.dataRefresher =
      setInterval(() => {
        this.getalldata();
      }, 10000);  
  }
 
}

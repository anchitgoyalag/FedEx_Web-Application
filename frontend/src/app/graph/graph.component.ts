import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Graphbook} from "./models/graphbook";
import { ApiService } from '../api.service';
import { FirstComponent } from '../first/first.component';
import { SecondComponent } from '../second/second.component';
import { ThirdComponent } from '../third/third.component';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  columns = ["Job","Type","BackLogIN", "SnapShot", "Diff", "Thresh"];
  index = ["job", "type", "backLogIn", "snapshotTsp", "diff", "thresh"];


  graphbooks: Graphbook[] = [];
  
  snapbook: Graphbook[] =[];
  dataRefresher: any;
  label =[];
  signal1='';
  signal2='';
  signal3='';
  count=0;
  count2=0;
  count3=0;
  i=0;
  i2=0;
  i3=0;
  fsig='';
  fsig2='';
  fsig3='';
  test: String[] =[];
  test2: String[] =[];
  test3: String[] =[];
  

  constructor(private apiService: ApiService) { }
  

  ngOnInit() {
    this.getalldata();
    this.refreshData(); 
  }
  


  public getalldata(){
    this.apiService.getalldata().subscribe(
      res => {
        this.graphbooks = res;
        
        for (var i=0; i<this.graphbooks.length;i++){
          if(this.graphbooks[i].type=='ISSCPREP'){
            if (this.graphbooks[i].diff<10){
              this.test.push("G");}
            else{
              this.test.push("R");
            }}
            if(this.graphbooks[i].type=='OPRPREP'){
              if (this.graphbooks[i].diff<10){
                this.test2.push("G");}
              else{
                this.test2.push("R");
              }}
              if(this.graphbooks[i].type=='OPFSCAN'){
                if (this.graphbooks[i].diff<1000){
                  this.test3.push("G");}
                else{
                  this.test3.push("R");
                }}
          if (this.label.indexOf(this.graphbooks[i].snapshotTsp)==-1){
            this.label.push(this.graphbooks[i].snapshotTsp);
          }}

          this.count = this.test.length;
          this.count2 = this.test2.length;
          this.count3 = this.test3.length;

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
                    while (this.count2!=0){
          	          if((this.test2[this.i2]=='R'|| this.test2[this.i2+1]=='R'||this.test2[this.i2+2]=='R')&&(this.signal2=="RED"||this.fsig2=="YELLOW(U)")){
          	            this.signal2="RED";
          	          }
          	          else if((this.test2[this.i2]=='R'|| this.test2[this.i2+1]=='R'||this.test2[this.i2+2]=='R')&&(this.signal2=="GREEN"||this.signal2==''||this.fsig2=="YELLOW(D)")){
                      this.signal2="YELLOW";
                      this.fsig2 = "YELLOW(U)";
                      }
          	          else if((this.test2[this.i2]=='G'&& this.test2[this.i2+1]=='G'&&this.test2[this.i2+2]=='G')&&(this.fsig2=="YELLOW(U)"||this.signal2=="RED")){
                        this.signal2="YELLOW";
                        this.fsig2 = "YELLOW(D)";
                        
          	          }
          	          else if((this.test2[this.i2]=='G'&& this.test2[this.i2+1]=='G'&&this.test2[this.i2+2]=='G')&&(this.fsig2=="YELLOW(D)"||this.signal2=='')){
          	            this.signal2="GREEN";
          	          }
          	          
          	          this.i2=this.i2+3;
          	          this.count2=this.count2-3;
                    }
                    while (this.count3!=0){
          	          if((this.test3[this.i3]=='R'|| this.test3[this.i3+1]=='R'||this.test3[this.i3+2]=='R')&&(this.signal3=="RED"||this.fsig3=="YELLOW(U)")){
          	            this.signal3="RED";
          	          }
          	          else if((this.test3[this.i3]=='R'|| this.test3[this.i3+1]=='R'||this.test3[this.i3+2]=='R')&&(this.signal3=="GREEN"||this.signal3==''||this.fsig3=="YELLOW(D)")){
                      this.signal3="YELLOW";
                      this.fsig3 = "YELLOW(U)";
                      }
          	          else if((this.test3[this.i3]=='G'&& this.test3[this.i3+1]=='G'&&this.test3[this.i3+2]=='G')&&(this.fsig3=="YELLOW(U)"||this.signal3=="RED")){
                        this.signal3="YELLOW";
                        this.fsig3 = "YELLOW(D)";
                        
          	          }
          	          else if((this.test3[this.i3]=='G'&& this.test3[this.i3+1]=='G'&&this.test3[this.i3+2]=='G')&&(this.fsig3=="YELLOW(D)"||this.signal3=='')){
          	            this.signal3="GREEN";
          	          }
          	          
          	          this.i3=this.i3+3;
          	          this.count3=this.count3-3;
          	        }

          this.apiService.getsnapdata(this.label[this.label.length-1]).subscribe(
            res => {
              this.snapbook = res;
            },
      
            err => {
              alert("An error has occcured");
              return false;
            }
      
          );
      },
       err => {
        alert("An error has occcured");
        return false;
      }

    );}

   
  
  
  
  refreshData(){
    this.dataRefresher =
      setInterval(() => {
        this.getalldata();
      }, 10000);  
  }
  

  

  
}

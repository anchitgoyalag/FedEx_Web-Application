import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { GraphComponent } from './graph/graph.component';
import { StatsComponent } from './stats/stats.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Router, RouterModule,Routes} from "@angular/router";
import { ChartsModule } from 'ng2-charts';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';



const routes: Routes = [
  {path: 'bar-chart', component: MyBarChartComponent},
  {path: '**', component: MyBarChartComponent }
];

const appRoutes :Routes = [
  {
    path:'graph',
    component:GraphComponent
  },
  {
    path:'stats',
    component:StatsComponent
  },
  {
    path:'first',
    component:FirstComponent
  },
  {
    path:'second',
    component:SecondComponent
  },
  {
    path:'third',
    component:ThirdComponent
  },
  {
    path:'',
    component:GraphComponent,
    pathMatch:'full'
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    GraphComponent,
    StatsComponent,
    NotFoundComponent,
    MyBarChartComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [GraphComponent, FirstComponent,SecondComponent,ThirdComponent,GraphComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

//This is the routing module
//import { CommonModule } from '@angular/common'; -->>Not required

import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component'
import { MessageComponent } from './message/message.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroDetailsComponent } from './hero-details/hero-details.component'

const routesHere: Routes = [
  { path: 'heroesPath', component: HeroesComponent },
  //{ path: 'messagePath', component: MessageComponent },
  { path: 'dashboardPath', component: DashboardComponent },
  { path: '', redirectTo: '/dashboardPath', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailsComponent }
];


@NgModule({

  imports: [
    //CommonModule -->> Not required
    RouterModule.forRoot(routesHere)
  ],
  //declarations: [] //No use of declarations as this is routing module
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }

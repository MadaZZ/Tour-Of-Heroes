//This is the routing module
import { NgModule } from '@angular/core'; 
//import { CommonModule } from '@angular/common'; -->>Not required
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component'

const routesHere: Routes = [
  { path: 'heroesPath', component: HeroesComponent }
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

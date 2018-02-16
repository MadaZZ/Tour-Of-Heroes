import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Generic classes/hero'
import { HeroService } from '../hero.service'
//import { HEROES } from '../Generic classes/mock_heroes'; >>>//Removed after importing heroes service

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes1: Hero[];
  constructor(private heroService: HeroService) { } //>>The parameter simultaneously defines a private heroService1 property and identifies it as a HeroService injection site
  
  getHeroes1(): void {
    this.heroService.sendHeroes().subscribe(heroess=>this.heroes1=heroess);//This is observable used //arrow function used to display heroes
     //heroes changed to heroes1
    //[[[[this.heroes1 = this.heroService.sendHeroes();]]]] -->>this line has been changed to use observables for asynchronous data stream
    //getHeroes changed to sendHeroes for understanding
  }
  ngOnInit() {
    this.getHeroes1();
  }
  //selectedHero: Hero;
  
  //Function to select hero
  //Called on clicking on hero
  /*
  onSelect(hero1: Hero): void {
    this.selectedHero = hero1;
  }
  //Function to deselect hero 
  //Called on clicking Deselect Button
  Deselect(): void{
    this.onSelect(null);
  }
  */

}

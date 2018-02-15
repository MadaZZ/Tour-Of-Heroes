import { Component, OnInit } from '@angular/core';
import { Hero } from '../Generic classes/hero';
import { HeroService } from '../hero.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroesDash: Hero[] = [];
 
  constructor(private heroService: HeroService) { }
 
  ngOnInit() {
    this.getHeroes();
  }
 
  getHeroes(): void {
    this.heroService.sendHeroes().subscribe(heroes => this.heroesDash = heroes.slice(0, 4));
  }
}

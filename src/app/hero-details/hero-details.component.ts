import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Generic classes/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService }  from '../hero.service';
//import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero1:Hero;
  //@Input() messagehere:MessageService;
  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit() {
    this.getHero();
  }
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.sendHeroes(id)
      .subscribe(hero => this.hero1 = hero);
  }
}

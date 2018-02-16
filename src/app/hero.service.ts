import { Injectable } from '@angular/core';
import { Hero } from './Generic classes/hero';
import { HEROES } from './Generic classes/mock_heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {
  /* [[this was without observable]]

  sendHeroes(): Hero[] {
    return HEROES;
  }
  */
  
  
  //this is the observable return
  sendHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService1.add('HeroService: fetched heroes list');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService1.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
constructor(private messageService1:MessageService) { }

}

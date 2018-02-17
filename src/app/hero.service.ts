import { Injectable } from '@angular/core';
import { Hero } from './Generic classes/hero';
import { HEROES } from './Generic classes/mock_heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  /** GET heroes from the server */
  /*
  sendHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }*/
  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService1.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService1.add('HeroService: ' + message);
  }
 // private heroesUrl = 'api/heroes';  // URL to web api
constructor(private http: HttpClient, private messageService1:MessageService) { }

}

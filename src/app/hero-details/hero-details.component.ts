import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Generic classes/hero'
//import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero1:Hero;
  //@Input() messagehere:MessageService;
  constructor() { }

  ngOnInit() {
  }

}

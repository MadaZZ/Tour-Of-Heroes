import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public messageService2:MessageService) {} //Put message service in message component constructor //name changed to messageService2

  ngOnInit() {
  }

}

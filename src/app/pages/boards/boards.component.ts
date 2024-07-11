import { Component, OnInit } from '@angular/core';
import {faTrello} from '@fortawesome/free-brands-svg-icons';

import {faBox,faWaveSquare,faClock} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent implements OnInit {
  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;

  constructor() { }

  ngOnInit(): void {
  }

}

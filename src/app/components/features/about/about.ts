import { Component } from '@angular/core';
import { NGO, COMMITTEE } from '../../core/ngo.config';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
})
export class About {
  ngo = NGO;
  committee = COMMITTEE;
}
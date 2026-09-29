import { Component } from '@angular/core';
import { OBJECTIVES } from '../../core/ngo.config';

@Component({
  selector: 'app-programs',
  imports: [],
  templateUrl: './programs.html',
})
export class Programs {
  objectives = OBJECTIVES;
}
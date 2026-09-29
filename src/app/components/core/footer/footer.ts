import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NGO } from '../ngo.config';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
})
export class Footer {
  ngo = NGO;
  year = new Date().getFullYear();
}
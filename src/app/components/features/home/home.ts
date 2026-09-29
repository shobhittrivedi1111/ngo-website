import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NGO } from '../../core/ngo.config';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class Home {
  ngo = NGO;
  programs = [
    { icon: '📚', title: 'Education', text: 'Free education and computer training for children and youth.' },
    { icon: '🩺', title: 'Health', text: 'Health camps, eye camps and blood donation drives.' },
    { icon: '🧵', title: 'Women empowerment', text: 'Sewing, beauty and skill training that builds self-reliance.' },
    { icon: '🤝', title: 'Care & relief', text: 'Support for the elderly, the disabled and families in need.' },
    { icon: '🌱', title: 'Environment', text: 'Tree plantation and awareness drives for a greener community.' },
    { icon: '🆘', title: 'Disaster relief', text: 'Help for families during floods, fires and other emergencies.' },
  ];
}
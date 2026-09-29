import { Component, signal } from '@angular/core';
import { NGO } from '../../core/ngo.config';

@Component({
  selector: 'app-donate',
  imports: [],
  templateUrl: './donate.html',
})
export class Donate {
  ngo = NGO;
  copied = signal(false);

  copyVpa() {
    navigator.clipboard.writeText(this.ngo.upi.vpa);
    this.copied.set(true);
    setTimeout(() => this.copied.set(false), 2000);
  }
}
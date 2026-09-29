import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { NGO, EMAILJS } from '../../core/ngo.config';

@Component({
  selector: 'app-membership',
  imports: [FormsModule],
  templateUrl: './membership.html',
})
export class Membership {
  ngo = NGO;
  tiers = NGO.membership;

  form = { name: '', phone: '', email: '', tier: 'General Member', message: '' };
  status = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');

  submit() {
    if (!this.form.name || !this.form.phone) return;
    this.status.set('sending');

    emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, {
      name: this.form.name,
      phone: this.form.phone,
      email: this.form.email,
      message: `Membership type: ${this.form.tier}. ${this.form.message}`,
    }, EMAILJS.publicKey)
      .then(() => {
        this.status.set('sent');
        this.form = { name: '', phone: '', email: '', tier: 'General Member', message: '' };
         // Show the success message for 4 seconds, then bring the form back
        setTimeout(() => this.status.set('idle'), 4000);
      })
      .catch(() => this.status.set('error'));
  }
}
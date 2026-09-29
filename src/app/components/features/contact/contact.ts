import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import emailjs from '@emailjs/browser';
import { NGO, EMAILJS } from '../../core/ngo.config';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
})
export class Contact {
  ngo = NGO;
  mapUrl: SafeResourceUrl;

  form = { name: '', phone: '', email: '', message: '' };
  status = signal<'idle' | 'sending' | 'sent' | 'error'>('idle');

  constructor(private sanitizer: DomSanitizer) {
    const rawUrl = `https://www.google.com/maps?q=${encodeURIComponent(NGO.address)}&output=embed`;
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
  }

  submit() {
    if (!this.form.name || !this.form.phone || !this.form.message) return;
    this.status.set('sending');

    emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, {
      name: this.form.name,
      phone: this.form.phone,
      email: this.form.email,
      message: this.form.message,
    }, EMAILJS.publicKey)
      .then(() => {
        this.status.set('sent');
        this.form = { name: '', phone: '', email: '', message: '' };
        setTimeout(() => this.status.set('idle'), 4000);
      })
      .catch(() => this.status.set('error'));
  }
}
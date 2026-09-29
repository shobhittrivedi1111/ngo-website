import { Component, signal } from '@angular/core';
import { GALLERY } from '../../core/ngo.config';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
})
export class Gallery {
  photos = GALLERY;
  active = signal<{ src: string; caption: string } | null>(null);

  open(photo: { src: string; caption: string }) {
    this.active.set(photo);
  }

  close() {
    this.active.set(null);
  }
}
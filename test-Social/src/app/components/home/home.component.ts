import { iPhoto } from './../../interfaces/i-photo';
import { Component, OnInit } from '@angular/core';
import { FotoService } from '../../services/foto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  arrayPhoto!: iPhoto[];
  arrayLike: iPhoto[] = [];

  like = 0;

  constructor(private photoSvc: FotoService) {}

  ngOnInit(): void {
    this.photoSvc.getAllPhoto().subscribe({
      next: (photo) => {
        this.arrayPhoto = photo.filter((photo) => photo.albumId === 1);
      },
    });

    this.photoSvc.like$.subscribe((photo) => {
      if (this.arrayLike.includes(photo)) {
        alert(' Hai già messo like a questa foto');
      } else {
        this.like++;
        this.arrayLike.push(photo);
      }
    });
  }

  removePhoto(photo: iPhoto) {
    this.arrayPhoto = this.arrayPhoto.filter((p) => p !== photo);
  }

  addLike(photo: iPhoto) {
    this.photoSvc.addLike(photo);
  }
}

import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { ImageService } from './image.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {
  backgroundImg: string;
  path = '/background';
  constructor(private afs: AngularFireStorage, private imageService: ImageService) { }

  uploadBackgroundImg(img: File): void {
    this.imageService.updateBackground(img);
  }
}

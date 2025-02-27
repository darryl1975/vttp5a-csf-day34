import { Component, OnInit } from '@angular/core';
import { FakeryService } from '../../service/fakery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {

  photos: any[] = [];

  constructor(private fakerySvc: FakeryService) { }

  async ngOnInit(): Promise<void> {
    // this.fakerySvc.getFakeryPhotos()
    //   .then((photo) => {
    //     console.log(photo);
    //     this.photos.push(photo);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    this.photos = await this.fakerySvc.getFakeryPhotos();
  }


}

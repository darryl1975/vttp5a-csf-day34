import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../service/files.service';

@Component({
  selector: 'app-simplegallery',
  templateUrl: './simplegallery.component.html',
  styleUrl: './simplegallery.component.css'
})
export class SimplegalleryComponent implements OnInit {

  photos: any[] = [];

  constructor(private filesSvc: FilesService) { }

  ngOnInit(): void {

    this.filesSvc.fileList().subscribe((data: any) => {
      // console.log(data);
      this.photos = data;

      console.log(this.photos);
    });
  }
}

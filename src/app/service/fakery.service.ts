import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FakeryService {

  constructor(private httpClient: HttpClient) { }

  private fakeryURL = 'https://jsonfakery.com/photos';

  async getFakeryPhotos() {

    try {
      const photos = await axios.get(this.fakeryURL);
      return photos.data;
    } catch (error) {
      console.error(error);
    }

  }
}

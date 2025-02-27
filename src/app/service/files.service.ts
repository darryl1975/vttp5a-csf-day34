import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private httpClient: HttpClient) { }

  private fileURL = 'http://localhost:3000/';

  uploadFile(file: File) : Observable<any>{

    const formData = new FormData();
    formData.append('file', file);
    return this.httpClient.post(this.fileURL + 'uploadFile', formData);
  }

  fileList() {
    return this.httpClient.get(this.fileURL + 'uploadedFiles');
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './component/example/example.component';
import { FileUploadComponent } from './component/file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './component/gallery/gallery.component';
import { SimplegalleryComponent } from './component/simplegallery/simplegallery.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    FileUploadComponent,
    GalleryComponent,
    SimplegalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

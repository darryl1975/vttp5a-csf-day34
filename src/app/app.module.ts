import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './component/example/example.component';
import { FileUploadComponent } from './component/file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './component/gallery/gallery.component';
import { SimplegalleryComponent } from './component/simplegallery/simplegallery.component';
import { CreateEmployeeComponent } from './component/create-employee/create-employee.component';
import { ListEmployeeComponent } from './component/list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';
import { DetailsEmployeeComponent } from './component/details-employee/details-employee.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './module/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouteGuardService } from './service/route-guard.service';
import { DeactivateGuardService } from './service/deactivate-guard.service';
import { TestComponent } from './component/test/test.component';
import { DebounceComponent } from './component/debounce/debounce.component';
import { DeleteDialogComponent } from './component/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    FileUploadComponent,
    GalleryComponent,
    SimplegalleryComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent,
    UpdateEmployeeComponent,
    DetailsEmployeeComponent,
    TestComponent,
    DebounceComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    RouteGuardService,
    DeactivateGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

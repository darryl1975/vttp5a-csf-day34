import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './component/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './component/create-employee/create-employee.component';
import { DetailsEmployeeComponent } from './component/details-employee/details-employee.component';
import { ExampleComponent } from './component/example/example.component';
import { FileUploadComponent } from './component/file-upload/file-upload.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { SimplegalleryComponent } from './component/simplegallery/simplegallery.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';

const routes: Routes = [
  {path: 'employeeList', component: ListEmployeeComponent},
  {path: 'employeeCreate', component: CreateEmployeeComponent},
  {path: 'employeeDetails/:id', component: DetailsEmployeeComponent},
  {path: 'employeeUpdate/:id', component: UpdateEmployeeComponent},
  {path: 'example', component: ExampleComponent},
  {path: 'fileupload', component: FileUploadComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'simplegallery', component: SimplegalleryComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

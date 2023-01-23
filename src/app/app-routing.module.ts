import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponentsComponent } from './form-components/form-components.component';
import { HomeComponent } from './home/home.component';
import { FileuploadComponent } from './fileupload/fileupload.component';




const routes: Routes = [

/*   {path: '',redirectTo: '/home', pathMatch: 'full'}, */
  {path:'',
  redirectTo: '/home',
  pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'form-components', component: FormComponentsComponent},
  {path:'fileupload', component: FileuploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

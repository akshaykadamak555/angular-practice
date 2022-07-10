import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DataComponent } from './Consuming-http-services/data/data.component';
import { ContactFormComponent } from './Template-driven-forms/contact-form/contact-form.component';

const routes: Routes = [
  { path: 'home', component: AppComponent},
  { path: 'crud', component: DataComponent},
  { path: 'form', component: ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

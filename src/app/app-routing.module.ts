import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseSearchComponent } from './course-search/course-search.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminAddComponent } from './admin-add/admin-add.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: CourseSearchComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'adminAdd', component: AdminAddComponent}
  // Add other routes for your components here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

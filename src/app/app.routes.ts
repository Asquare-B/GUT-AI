import { Routes } from '@angular/router';
import { HomeLandingComponent } from './components/home-landing/home-landing.component';
import { ProfileHomeComponent } from './components/profile-home/profile-home.component';
import { EnrollmentPageComponent } from './components/enrollment-page/enrollment-page.component';
import { EnrollmentFormComponent } from './components/enrollment-form/enrollment-form.component';


const routeConfig: Routes = [
    {
      path: '',
      component: HomeLandingComponent,
      title: 'Home page',
    },
    {
      path: 'profile',
      component: EnrollmentPageComponent,
      title: 'Profile',
    },
  ];
  export default routeConfig;
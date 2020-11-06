import { PatientComponent } from './modules/patient/patient.component';
import { AnalyticsComponent } from './modules/analytics/analytics.component';
import { PostsComponent } from './modules/posts/posts.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    data: { breadcrumb: 'KMS home' },
    children: [
      {
        path: 'dashboard', component: DashboardComponent,
        data: { breadcrumb: 'Dashboard' }
      },
      {
        path: 'register', component: PostsComponent,
        data: { breadcrumb: 'Registrations' }
      },
      {
        path: 'patient', component: PatientComponent,
        data: { breadcrumb: 'Patient' }
      },
      {
        path: 'analytics', component: AnalyticsComponent,
        data: { breadcrumb: 'Analytics' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

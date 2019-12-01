import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: './home/home.module#HomeModule'
    },
    {
      path: 'about-us',
      loadChildren: './about-us/about-us.module#AboutUsModule'
    },
    {
      path: 'contact-us',
      loadChildren: './contact-us/contact-us.module#ContactUsModule'
    },
    {
      path: 'our-services',
      loadChildren: './our-services/our-services.module#OurServicesModule'
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

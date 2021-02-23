import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusModule } from './aboutus/aboutus.module';
import { GalleryModule } from './gallery/gallery.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';

const routes: Routes = [
  
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  {
      path: 'home',
      loadChildren: () => HomeModule,
      data: {
        title: 'Home'
      }
  },
  {
      path: 'gallery',
      loadChildren: () => GalleryModule,
      data: {
        title: 'Gallery'
      }
  },
  {
      path: 'login',
      loadChildren: () => LoginModule,
      data: {
        title: 'Login'
      }
  },
  {
    path: 'aboutus',
    loadChildren: () => AboutusModule,
    data: {
      title: 'About Us'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

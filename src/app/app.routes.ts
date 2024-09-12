import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterComponent } from './register/register.component';
import { UserpageComponent } from './userpage/userpage.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
  { path: 'nav', component: NavBarComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserpageComponent },
  { path: 'home', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

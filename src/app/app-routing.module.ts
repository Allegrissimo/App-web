//import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

const appRoutes = [

{path: "", component:AppComponent, pathMatch:"full"},
{path: "login", component:LoginComponent, pathMatch:"full"},
{path:"register", component:RegisterComponent, pathMatch:"full"}

];

export const routing = RouterModule.forRoot(appRoutes);

import { Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { Component } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

export const routes: Routes = [
    {
        path:"create-account",
        component:RegistrationComponent
    },
    {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"about-us",
        component:AboutComponent
    },
    {
        path:"contact",
        component:ContactComponent
    },
    {
        path:"forgot-password",
        component:ForgetPasswordComponent
    }
];

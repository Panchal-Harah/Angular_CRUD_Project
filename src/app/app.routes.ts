import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateComponent } from './update/update.component';
import path from 'node:path';
import { Component } from '@angular/core';

export const routes: Routes = [
    {path:'registration',component:RegistrationComponent},
    {path:'update/:userid',component:UpdateComponent},
];
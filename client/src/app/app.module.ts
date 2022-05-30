import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SchedulingComponentComponent } from './scheduling-module/scheduling-component/scheduling-component.component';
import { VolunteerDetailsComponentComponent } from './volunteer-module/volunteer-details-component/volunteer-details-component.component';
import { HttpClientModule } from '@angular/common/http';
import { VolunteerListComponentComponent } from './volunteer-module/volunteer-list-component/volunteer-list-component.component';
import { VolunteerModule } from './volunteer-module/volunteer-module.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchedulingModuleModule } from './scheduling-module/scheduling-module.module';

//1
//Navigation to the other pages
const ROUTES: Routes = [
  { path: "Volunteer", component: VolunteerDetailsComponentComponent },
  { path: "VolunteerList", component: VolunteerListComponentComponent },
  { path: "VolunteerDetailse/:id", component: VolunteerDetailsComponentComponent },
  { path: "Scheduling", component: SchedulingComponentComponent },
  { path: "**", component: PageNotFoundComponent },
  { path: "", component: SchedulingComponentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, SchedulingModuleModule, VolunteerModule, RouterModule, CommonModule, AppRoutingModule,
    RouterModule.forRoot(ROUTES), HttpClientModule, ReactiveFormsModule, SchedulingModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}



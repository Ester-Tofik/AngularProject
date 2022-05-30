import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerListComponentComponent } from './volunteer-list-component/volunteer-list-component.component';
import { VolunteerDetailsComponentComponent } from './volunteer-details-component/volunteer-details-component.component';
import { VolunteerService } from './volunteer.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [VolunteerListComponentComponent, VolunteerDetailsComponentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,RouterModule
  ],
  providers:[VolunteerService]
})
export class VolunteerModule { }

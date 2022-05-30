import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulingComponentComponent } from './scheduling-component/scheduling-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SchedulingService } from './scheduling.service';








@NgModule({
  declarations: [SchedulingComponentComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  providers:[SchedulingService]

})
export class SchedulingModuleModule { }

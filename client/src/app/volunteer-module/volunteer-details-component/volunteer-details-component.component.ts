import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { scheduled } from 'rxjs';
import { SchedulingService } from 'src/app/scheduling-module/scheduling.service';
import { Volunteer } from '../volunteer.model';
import { VolunteerService } from '../volunteer.service';

@Component({
  selector: 'app-volunteer-details-component',
  templateUrl: './volunteer-details-component.component.html',
})
export class VolunteerDetailsComponentComponent implements OnInit {

  detailsForm: FormGroup = new FormGroup({
    name: new FormControl(),
    id: new FormControl(),
    sunday: new FormControl(),
    monday: new FormControl(),
    tuseday: new FormControl(),
    wensday: new FormControl(),
    thurhday: new FormControl(),
    friday: new FormControl(),

  });

  constructor(private _activeRouter: ActivatedRoute, private _volunteer: VolunteerService, private _router: Router,
    private _sch: SchedulingService) {
  }

  _volunteerId: number = 1;
  private _val!: Volunteer;
  ngOnInit(): void {
    this._activeRouter.paramMap.subscribe(params => {
      if (params.get("id"))
        this._volunteerId = +(Number)(params.get("id"));
      this._volunteer.getValunteerByID(this._volunteerId).subscribe(data =>
        this.volunteer = data);
    })
  }

  get volunteer() {
    return this._val;
  }

  set volunteer(val: Volunteer) {
    this._val = val;

    if (this._val) {
      this.detailsForm.controls["name"].setValue(this._val.name);
      this.detailsForm.controls["id"].setValue(this._val.id);
      this.detailsForm.controls["sunday"].setValue(this._val.days[0]);
      this.detailsForm.controls["monday"].setValue(this._val.days[1]);
      this.detailsForm.controls["tuseday"].setValue(this._val.days[2]);
      this.detailsForm.controls["wensday"].setValue(this._val.days[3]);
      this.detailsForm.controls["thurhday"].setValue(this._val.days[4])
      this.detailsForm.controls["friday"].setValue(this._val.days[5]);
    }
  }
  daysOfVolunteer: boolean[] = [];
  scheduling: Volunteer[] = [];
  volunteerCurrontDays: boolean[] = [];
  // thereIsSomething: boolean = false;
  saveVolunteeer() {
    //6
    this.volunteerCurrontDays = [this.detailsForm.value.sunday, this.detailsForm.value.monday, this.detailsForm.value.tuseday, this.detailsForm.value.wensday, this.detailsForm.value.wensday, this.detailsForm.value.friday];
    //מקבל את מערך השיבוץ
    this._sch.getScheduling(0).subscribe(schedule => {
      debugger
      if (schedule) {
        for (let i = 0; i < this.volunteerCurrontDays.length; i++) {
          if (schedule[i] != null) {
            if (this._val.id == schedule[i].id) {
              if (this.volunteerCurrontDays[i] == false) {
                alert("you can't save the data on day" + " " + (i + 1));
                this.volunteerCurrontDays[i] = true;
              }
            }
          }
        }
        for (let i = 0; i < this.volunteerCurrontDays.length; i++) {
          this._val.days[i] = this.volunteerCurrontDays[i];
        }
          this._val.name = this.detailsForm.value.name;
          this._val.id = this.detailsForm.value.id;
          this._volunteer.saveVolunteerServer(this._val).subscribe(sucsses => {
            if (sucsses) {
              alert("saved succsesfully");
              this._router.navigate(["/VolunteerList"]);
            }
            else
              alert("faild");
          }
          );
      }
    });
  }
}
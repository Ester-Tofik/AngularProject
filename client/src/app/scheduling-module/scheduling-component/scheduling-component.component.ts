import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Volunteer } from 'src/app/volunteer-module/volunteer.model';
import { SchedulingService } from '../scheduling.service';

@Component({
  selector: 'app-scheduling-component',
  templateUrl: './scheduling-component.component.html',
  // styleUrls: ['./scheduling-component.component.css'],
})
export class SchedulingComponentComponent implements OnInit {
  //7
  schedulingList: (Volunteer[])[] = [];
  selected: Volunteer[] = [];
  view: boolean[] = [false, false, false, false, false, false];
  // selectedSch!: string;
  allOnLoud: boolean = false;
  constructor(private _ListSchdualing: SchedulingService) { }

  scheduleForm: FormGroup = new FormGroup({
    sunday: new FormControl("", Validators.nullValidator),
    monday: new FormControl(""),
    Tuesday: new FormControl(""),
    Wednesday: new FormControl(""),
    Thursday: new FormControl(""),
    Friday: new FormControl(""),
    sch: new FormControl(""),
  });


  ngOnInit(): void {

    this._ListSchdualing.getVoluteersByDay().subscribe(data => {
      this.schedulingList = data;
      this.scheduleForm.controls["sunday"].setValue(this.schedulingList[0]);
      this.scheduleForm.controls["monday"].setValue(this.schedulingList[1]);
      this.scheduleForm.controls["Tuesday"].setValue(this.schedulingList[2]);
      this.scheduleForm.controls["Wednesday"].setValue(this.schedulingList[3]);
      this.scheduleForm.controls["Thursday"].setValue(this.schedulingList[4]);
      this.scheduleForm.controls["Friday"].setValue(this.schedulingList[5]);

    }
    )


  }
  sch() {
    this._ListSchdualing.getScheduling(0).subscribe(sch => {
      if (sch) {
        this.selected = sch;
        alert(JSON.stringify(this.selected));
      }
    })
  }
  //8
  saveSch() {
    let Scheduling = ["", "", "", "", "", ""];
    //let cuurontView = [false, false, false, false, false, false];
    Scheduling[0] = this.scheduleForm.value.sunday;
    Scheduling[1] = this.scheduleForm.value.monday;
    Scheduling[2] = this.scheduleForm.value.Tuesday;
    Scheduling[3] = this.scheduleForm.value.Wednesday;
    Scheduling[4] = this.scheduleForm.value.Thursday;
    Scheduling[5] = this.scheduleForm.value.Friday;
    for (let i = 0; i < Scheduling.length; i++) {
      if (typeof Scheduling[i] != 'string') {
        Scheduling[i] = "";
      }
      else
        this.view[i] = true;
    }

    // for (let i = 0; i < 6; i++) {
    //   if (Scheduling[i] === "") {
    //   }

    // }
    this._ListSchdualing.saveSchedualing(Scheduling).subscribe(true1 => {
      if (true1) {
        alert("sucsses!!");
      }
    });
  }

}


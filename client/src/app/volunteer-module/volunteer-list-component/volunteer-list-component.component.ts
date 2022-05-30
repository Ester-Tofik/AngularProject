import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { VolunteerModule } from '../volunteer-module.module';
import { Volunteer } from '../volunteer.model';
import { VolunteerService } from '../volunteer.service';

@Component({
  selector: 'app-volunteer-list-component',
  templateUrl: './volunteer-list-component.component.html',
})



@Injectable()
export class VolunteerListComponentComponent implements OnInit {
  
  volunteers : Volunteer[] = [];
  _routeVolunteer: Router | undefined;
  volunteer : Volunteer = new Volunteer;

  constructor(private _httpVolunteer: VolunteerService) { }


  ngOnInit(): void {
    this._httpVolunteer.getVolunteer().subscribe(voluteer => this.volunteers = voluteer, err => { document.write(err); });
    }

    
}



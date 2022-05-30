import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { VolunteerModule } from "./volunteer-module.module";
import { Volunteer } from "./volunteer.model";



@Injectable()
export class VolunteerService {

    constructor(private _httpVolunteer: HttpClient) { }

    volunteers: Volunteer[] = [];

    getVolunteer(): Observable<Volunteer[]> {
        return this._httpVolunteer.get<Volunteer[]>("api/Volunteer");
    }

    getValunteerByID(id: number): Observable<Volunteer> {
        return this._httpVolunteer.get<Volunteer>("/api/Volunteer/" + id);
    }

    getScheduleFromServer(day: number): Observable<Volunteer> {
        return this._httpVolunteer.get<Volunteer>("/api/Scheduling/" + day)
    }

    saveVolunteerServer(volunteer: Volunteer): Observable<boolean> {
        return this._httpVolunteer.put<boolean>("/api/Volunteer", volunteer);
    }
}
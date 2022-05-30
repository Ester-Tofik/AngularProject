import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Volunteer } from "../volunteer-module/volunteer.model";

@Injectable()
export class SchedulingService {

    constructor(private _http: HttpClient) { }

    volunteers: Volunteer[] = [];

    //קבלת רשימת המתנדבים הפוטנציאלים לפי יום
    getVoluteersByDay(): Observable<Volunteer[][]> {
        return this._http.get<Volunteer[][]>("api/Scedualing");
    }

    saveSchedualing(names: string[]): Observable<boolean> {
        return this._http.put<boolean>("api/Scedualing", names);
    }

    // getScheduling(day: number):Observable<Volunteer[]> { 
    //     return this._http.get<Volunteer[]>("api/Scedualing/Get/?day" + day);
    // }

    getScheduling(day: number):Observable<Volunteer[]> { 
        return this._http.get<Volunteer[]>("api/Scedualing/" + day);
    }
    // saveVolunteerServer(volunteer: Volunteer): Observable<boolean> {
    //     return this._httpVolunteer.put<boolean>("/api/Volunteer", volunteer);
    // }

    //קבלת מערכת השיבוץ
    // getScheduling() { }
    //שמירת השיבוץ
}
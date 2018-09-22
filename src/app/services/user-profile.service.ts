import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IUserProfileData {
	likes: number,
	following: number,
	followers: number,
	comments: Array<string>
};

@Injectable({
	providedIn: 'root'
})
export class UserProfileService {

	constructor(private http: HttpClient) { }

	public getJSON(): Observable<Object> {
		return this.http.get("../../assets/data.json");
	}
}

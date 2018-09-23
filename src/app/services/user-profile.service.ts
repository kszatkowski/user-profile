import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IComment } from '../components/user-profile-comments/user-profile-comments.component';

export interface IUserProfileData {
	likes: number,
	following: number,
	followers: number,
	comments: Array<IComment>
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

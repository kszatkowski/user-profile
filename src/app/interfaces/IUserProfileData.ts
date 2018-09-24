import { IProfile } from './IProfile';
import { IComment } from './IComment';

export interface IUserProfileData {
	profile: IProfile,
	likes: number,
	following: number,
	followers: number,
	comments: Array<IComment>
};
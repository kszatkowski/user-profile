import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserProfileHeaderComponent } from './components/user-profile-header/user-profile-header.component';
import { DisplayNameComponent } from './components/display-name/display-name.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { StatistcsItemComponent } from './components/statistics/statistcs-item/statistcs-item.component';
import { UserProfileCommentsComponent } from './components/user-profile-comments/user-profile-comments.component';
import { CommentComponent } from './components/user-profile-comments/comment/comment.component';
import { DayDifferencePipe } from './pipes/day-difference.pipe';

@NgModule({
	declarations: [
		AppComponent,
		UserProfileHeaderComponent,
		DisplayNameComponent,
		StatisticsComponent,
		StatistcsItemComponent,
		UserProfileCommentsComponent,
		CommentComponent,
		DayDifferencePipe
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

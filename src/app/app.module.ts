import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserProfileHeaderComponent } from '@app/components/user-profile-header/user-profile-header.component';
import { StatisticsComponent } from '@app/components/statistics/statistics.component';
import { StatistcsItemComponent } from '@app/components/statistics/statistcs-item/statistcs-item.component';
import { UserProfileCommentsComponent } from '@app/components/user-profile-comments/user-profile-comments.component';
import { CommentComponent } from '@app/components/user-profile-comments/comment/comment.component';
import { DayDifferencePipe } from '@app/pipes/day-difference.pipe';
import { ShareProfileDialogComponent } from '@app/components/share-profile-dialog/share-profile-dialog.component';
import { SharedComponentsModule } from '@app/shared/components/shared-components.module';

@NgModule({
	declarations: [
		AppComponent,
		UserProfileHeaderComponent,
		StatisticsComponent,
		StatistcsItemComponent,
		UserProfileCommentsComponent,
		CommentComponent,
		DayDifferencePipe,
		ShareProfileDialogComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatDialogModule,
		FormsModule,
		ReactiveFormsModule,
		SharedComponentsModule
	],
	providers: [],
	bootstrap: [AppComponent],
	entryComponents: [ShareProfileDialogComponent]
})
export class AppModule { }

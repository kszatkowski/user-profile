import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserProfileHeaderComponent } from './components/user-profile-header/user-profile-header.component';
import { DisplayNameComponent } from './components/display-name/display-name.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { StatistcsItemComponent } from './components/statistics/statistcs-item/statistcs-item.component';

@NgModule({
	declarations: [
		AppComponent,
		UserProfileHeaderComponent,
		DisplayNameComponent,
		StatisticsComponent,
		StatistcsItemComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

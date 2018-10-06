import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayNameComponent } from '@app/shared/components/display-name/display-name.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [DisplayNameComponent],
	exports: [DisplayNameComponent]
})
export class SharedComponentsModule { }

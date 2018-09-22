import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-display-name',
	templateUrl: './display-name.component.html',
	styleUrls: ['./display-name.component.scss']
})
export class DisplayNameComponent implements OnInit {

	@Input() fullName: string;
	@Input() city: string;

	constructor() { }

	ngOnInit() {
	}

}

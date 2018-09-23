import { Component, OnInit, Input } from '@angular/core';

export interface IComment {
    content: string;
    date: Date;
}

@Component({
    selector: 'app-user-profile-comments',
    templateUrl: './user-profile-comments.component.html',
    styleUrls: ['./user-profile-comments.component.scss']
})
export class UserProfileCommentsComponent implements OnInit {

    @Input() comments: Array<IComment>;
    toggle: boolean = false;

    constructor() { }

    ngOnInit() {
    }

    toggleComments(): void {
        this.toggle = !this.toggle;
    }
}

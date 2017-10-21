import {Component, Inject, OnInit, TRANSLATIONS} from '@angular/core';
import {User} from '../../models/app.models';
import {UserService} from '../../services/user/user.service';
import {TranslateService} from '../../translate/translate.service';
import {TranslatePipe} from '../../translate/translate.pipe';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    FirstNameColumn = 'FirstName';
    LastNameColumn = 'LastName';
    UserNameColumn = 'UserName';
    EmailColumn = 'Email';

    constructor(private userService: UserService,
                private _translate: TranslateService,
                private toastr: ToastrService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();

        this.selectLang('en');
        this.selectLang('he');
    }

    deleteUser(user) {
        this.userService.delete(user).subscribe(() => {
            this.toastr.success('User deleted successfuly');
            this.loadAllUsers();
        });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => {
            this.users = users.data;
        });
    }

    selectLang(lang: string) {
        // set default;
        this._translate.use(lang);
    }
}

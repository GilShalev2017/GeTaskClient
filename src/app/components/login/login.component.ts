import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import {ToastrService} from 'ngx-toastr';
import { AuthService, AppGlobals } from 'angular2-google-login';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    invalidCredentials = false;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService,
                private _googleAuth: AuthService,
                private toastr: ToastrService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        // AppGlobals.GOOGLE_CLIENT_ID = '343554028423-aa9c2ggnope4ok97j679j8p7o332spbh.apps.googleusercontent.com';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    if (data === 'user not found') {
                        this.invalidCredentials = true;
                        this.loading = false;
                        return;
                    }
                    this.invalidCredentials = false;
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.invalidCredentials = true;
                    this.loading = false;
                });
    }
}

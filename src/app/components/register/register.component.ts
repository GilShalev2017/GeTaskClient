import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    model: any = {};
    loading = false;
    emailValidationRegex: string = "[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+";

    constructor(private router: Router,
                private userService: UserService,
                private toastr: ToastrService) {
    }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.toastr.success('Registration successful');
                    this.router.navigate(['/login']);
                },
                error => {
                    this.toastr.error(error);
                    this.loading = false;
                });
    }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../../services/user/user.service';
import {Subscription} from 'rxjs/Subscription';
import {User} from '../../models/app.models';
import {ToastrService} from 'ngx-toastr';
import {CloudinaryOptions, CloudinaryUploader} from '../../cloudinary';
import {CloudinaryImageComponent, CloudinaryImageService} from "ng2-cloudinary";

@Component({
    selector: 'my-profile',
    templateUrl: './my-profile.component.html',
    styleUrls: ['./my-profile.component.css']
})

export class MyProfileComponent implements OnInit {

    userId: Observable<string>;
    private subscription: Subscription;
    model: any = {};
    emailValidationRegex: string = "[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+";
    imageId: string = 'e3264cf16f34ecd3c7c564f5668cbc1e';
    cloudName: string = 'gilshalev';
    type: string = 'upload';
    width: number = 200;
    userCloudName: string = 'gilshalev';
    userPreset: string = 'gilshalev';
    // Temporary set uploadOptions
    // will be overriden with typed cloudName and preset when a file added to queue
    uploader: CloudinaryUploader = new CloudinaryUploader(new CloudinaryOptions({
        cloudName: this.userCloudName,
        uploadPreset: this.userPreset
    }));

    constructor(private activatedRoute: ActivatedRoute,
                private userService: UserService,
                private toastr: ToastrService) {

        this.uploader.onAfterAddingFile = (item: any) => {
            //Update cloudname and preset
            this.uploader.cloudName = this.userCloudName;
            this.uploader.uploadPreset = this.userPreset;
            //Update uploadUrl on FileItem
            item.url = this.uploader.options.url;

            this.uploader.uploadAll();

            return item;
        };

        this.uploader.onSuccessItem = (item: any, response: string, status: number, headers: any): any => {
            let res: any = JSON.parse(response);
            //Update imageId, type and cloudname to replace cloudinary placeholder
            this.imageId = res.public_id;
            this.type = this.uploader.type;
            this.cloudName = this.userCloudName;
            this.width = undefined;
            return {item, response, status, headers};
        };
    }

    onImgUrlSet(url) {
        this.model.profile_photo = url;
    }

    upload(): void {
        this.uploader.uploadAll();
    }

    ngOnInit() {
        this.reloadData();
    }

    reloadData() {
        this.activatedRoute.params.forEach((params: Params) => {
            this.userId = params['id'];

            this.userService.getById(this.userId).subscribe((member) => {
                this.model = member.data;
            });
        });
    }

    update() {
        this.userService.update(this.model).subscribe((member) => {
            this.model = member.data;
            this.toastr.success('User updated successfuly');
        });
    }

    getImageUrl() {
        return this.model.profile_photo;
    }
}



//Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {ModalModule, BsDropdownModule} from 'ngx-bootstrap';
import {DataTableModule} from 'angular-4-data-table';
import {AppRoutingModule} from './config/routes.config';
import {AngularFontAwesomeModule} from 'angular-font-awesome/angular-font-awesome';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
//Cloudinary
import { Ng2CloudinaryModule } from './cloudinary';
import { FileUploadModule } from 'ng2-file-upload';
//Components
import {AppComponent} from './components/app/app.component';
import {MainComponent} from './components/main/main.component';
import {RegisterComponent} from './components/register/register.component';
import {MyProfileComponent} from './components/my-profile/my-profile.component';
import {LoginComponent} from './components/login/login.component';
//Services & Guards
import {UserService} from './services/user/user.service';
import {AuthGuard} from './guards/auth-guard';
import {AuthenticationService} from './services/authentication/authentication.service';

import {TRANSLATION_PROVIDERS} from './translate/translations';
import {TranslatePipe} from './translate/translate.pipe';
import {TranslateService} from './translate/translate.service';

import { AuthService, AppGlobals } from 'angular2-google-login';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        MyProfileComponent,
        LoginComponent,
        RegisterComponent,
        TranslatePipe
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        DataTableModule,
        AppRoutingModule,
        ModalModule.forRoot(),
        BsDropdownModule.forRoot(),
        AngularFontAwesomeModule,
        CommonModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        Ng2CloudinaryModule,
        FileUploadModule
    ],
    providers: [AuthenticationService, UserService, AuthGuard, TRANSLATION_PROVIDERS, TranslateService, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

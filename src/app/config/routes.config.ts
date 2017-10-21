import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { MainComponent } from '../components/main/main.component';
import { RegisterComponent} from '../components/register/register.component';
import { MyProfileComponent } from '../components/my-profile/my-profile.component';
import { AuthGuard } from '../guards/auth-guard';

const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full'},
    { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
    { path: 'my-profile/:id', component: MyProfileComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent }
    ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}

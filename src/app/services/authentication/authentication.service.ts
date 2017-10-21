import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class AuthenticationService {

    private serverUrl = 'http://localhost:4020';

    constructor(private http: Http) {
    }

    login(username: string, password: string) {

        return this.http.post(`${this.serverUrl}/api/authenticate`, {username: username, password: password})
            .map((response: Response) => {
                const user = response.json();

                if (user) {
                    // store user details in local storage to keep user logged in between page refreshes
                    if (!user.data) {
                        if (user.info.includes('User not found')) {
                            return 'user not found';
                        }
                    } else {
                        localStorage.setItem('currentUser', JSON.stringify(user.data));
                    }
                }});
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}

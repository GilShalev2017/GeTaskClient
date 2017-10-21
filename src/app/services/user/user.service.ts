import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../../models/app.models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
    private serverUrl = 'http://localhost:4020';

    constructor(private http: Http) { }

    getAll() {
        return this.http.get(`${this.serverUrl}/api/users`, this.jwt())
            .map((response: Response) => response.json());
    }

    getById(id) {
        return this.http.get(`${this.serverUrl}/api/users/${id}`, this.jwt())
            .map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post(`${this.serverUrl}/api/users`, user, this.jwt())
            .map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put(`${this.serverUrl}/api/users/${user._id}`, user, this.jwt())
            .map((response: Response) => response.json());
    }

    delete(user: User): Observable<User> {
        const headers = new Headers({ 'Content-Type': 'application/json' });

        return this.http.delete(`${this.serverUrl}/api/users`, new RequestOptions({headers: headers, body: user}))
            .map((response: Response) => response.json());
    }

    private jwt() {
        // create authorization header with jwt token
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            const headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}

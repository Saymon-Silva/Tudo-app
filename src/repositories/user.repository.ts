import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { users } from "src/data/user";
import { User } from "src/models/users";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

const API_URL = 'https://run.mocky.io/v3/62f94d04-a430-4a64-a1bb-2b3d019cbf58'
@Injectable()
export class UserRepository {

    constructor(
        private httpCiente: HttpClient       
    ){}
    
    public getUsers(): Observable <User[]> {

        return this.httpCiente.get<User[]>(API_URL).pipe(map(values => {
            const users : User [] = [];
            for (const value of values){
                users.push(Object.assign(new User(), value))
            }
            return users
        })); 
    }



}

import { Injectable } from "@angular/core";
import { users } from '../data/user';
import { User } from "src/models/users";

@Injectable()
export class UserRepository {

    getUsers(): User[] {
        return users;
    }
}

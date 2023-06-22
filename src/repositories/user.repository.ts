import { Injectable } from "@angular/core";
import { users } from "src/data/user";
import { User } from "src/models/users";

@Injectable()
export class UserRepository {

    getUsers(): User[] {
        return users;
    }

}

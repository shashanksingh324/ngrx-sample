import { createAction } from "@ngrx/store";
import { User } from "./users.reducer";

export const getUser = createAction('[User] Get User', (users: User[])=> ({
    users,
}))

export const addUser = createAction('[User] Add User', (user: User)=> ({
    user,
}))
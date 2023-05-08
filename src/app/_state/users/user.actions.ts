import { createAction } from "@ngrx/store";
import { User } from "./users.reducer";

export const getUser = createAction('[User] Get User', (users: User[])=> ({
    users,
}))

export const addUser = createAction('[User] Add User', (user: User)=> ({
    user,
}))

export const updateUser = createAction('[User] Update User', (user: User)=> ({
    user,
}))

export const removeUser = createAction('[User] Remove User', (user: User)=> ({
    user,
}))
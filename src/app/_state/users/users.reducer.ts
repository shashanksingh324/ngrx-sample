import { createReducer, createSelector, on } from "@ngrx/store";
import { addUser, getUser } from "./user.actions";

export interface State {
    users: User[];
}

export interface User {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    birthDate: string,
}

const initialState: User[] = [];

export const userReducer = createReducer(
    initialState,
    on(getUser, (state, {users})=> [...users]),
    on(addUser, (state, {user})=> [...state, user]),

)

export const userSelector= createSelector(
    (state: State) => state.users,
    (users: User[]) => users
)
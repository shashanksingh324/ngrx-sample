import { Routes } from "@angular/router";
import { userReducer } from "@app/_state/users/users.reducer";
import { provideState } from "@ngrx/store";
import { UsersComponent } from "@pages/users/users.component";

export const PagesRoutes: Routes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: UsersComponent,
    }
]
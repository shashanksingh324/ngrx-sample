import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, User } from '@app/_state/users/users.reducer';
import { addUser, removeUser, updateUser } from '@app/_state/users/user.actions';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  userForm: FormGroup;
  users$: Observable<User[]>;
  isEdit = false;

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;

  constructor(
    private store: Store<State>,
    private _fb: FormBuilder
  ) {
    this.users$ = store.select('users');
  }

  ngOnInit(): void {
    this.userForm = this._fb.group({
      id: '',
      firstName: ['', Validators.required],
      lastName: '',
      maidenName: '',
      age: 0,
      gender: '',
      email: '',
      phone: '',
      birthDate: '',
    })
  }

  editUser(user: User) {
    this.isEdit = true;
    this.userForm.patchValue(user);
  }

  addUser() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
    let user = this.userForm.value;
    if (this.isEdit) {
      this.store.dispatch(updateUser(user))
      this.isEdit = false;
    } else {
      const _id = Math.ceil(Math.random() * 10000)
      user.id = _id;
      this.store.dispatch(addUser(user))
    }
    this.userForm.reset();
  }

  deleteUser(user: User) {
    this.store.dispatch(removeUser(user));
  }

}

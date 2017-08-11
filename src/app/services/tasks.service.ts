import { Injectable } from '@angular/core';

import { AuthService } from "./auth.service";

import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

import * as firebase from "firebase/app";

@Injectable()
export class TasksService {

  public tasks: FirebaseListObservable<any[]>;

  constructor(
    private authService: AuthService,
    private afDb: AngularFireDatabase
  ) {
    this.authService.user
      .subscribe((user: firebase.User) => {
        this.tasks = this.afDb.list(`/tasks/${user.uid}/`);
      })
  }

}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Account } from './models/account';

@Injectable()
export class AuthService {

    public profile$: Subject<Account> = new BehaviorSubject<Account>(undefined);
    constructor() { }

}

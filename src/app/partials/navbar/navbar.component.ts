import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'stub';
import { Subscription } from 'rxjs/Subscription';
import { Account } from 'common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

    private account: Account;
    private subscriptions: Subscription[] = [];

    constructor(private authService: AuthService) { }

    public get name(): string {
        if (!this.authenticated) {
            return '';
        }
        return this.account.username;
    }

    public get authenticated(): boolean {
        return this.account !== undefined;
    }

    public ngOnInit(): void {
        this.subscriptions.push(
            this.authService.profile$.subscribe(
                (profile: Account) => this.account = profile
            )
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnDestroy {

    public status_code: number;
    private subscriptions: Subscription[] = [];

    constructor(private activatedRoute: ActivatedRoute) { }

    public ngOnInit(): void {
        this.subscriptions.push(
            this.activatedRoute.params.subscribe(
                (params: Params) => {
                    this.parseStatusCode(params);
                }
            )
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    private parseStatusCode(params: Params): void {
        let status_code: number;
        try {
            status_code = +params.status_code;
            if (isNaN(status_code)) {
                throw new Error(`Status code ${params.status_code} is NaN`);
            }
        } catch (e) {
            status_code = 421;
        } finally {
            this.status_code = status_code;
        }
    }

}

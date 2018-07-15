import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

    public status_code: number;

    constructor(private activatedRoute: ActivatedRoute) { }

    public ngOnInit(): void {
        this.activatedRoute.params.subscribe(
            (params: Params) => {
                this.parseStatusCode(params);
            }
        );
    }

    private parseStatusCode(params: Params): void {
        let status_code: number;
        try {
            status_code = +params.status_code;
            if (isNaN(status_code)) {
                throw new Error(`Status code ${params.status_code} is NaN`);
            }
        } catch (e) {
            console.error(e);
            status_code = 421;
        } finally {
            this.status_code = status_code;
        }
    }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponent } from './error.component';
import { HttpStatusModule } from 'http-status-pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('ErrorComponent', () => {
    let component: ErrorComponent;
    let fixture: ComponentFixture<ErrorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ErrorComponent],
            imports: [
                RouterTestingModule,
                HttpStatusModule
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ErrorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('parseStatusCode', () => {
        it('should set the status_code to the status_code integer param', () => {
            component['parseStatusCode']({ status_code: 500 });
            expect(component.status_code).toBe(500);
        });
        it('should set the status_code to 421 if an error occurs during parsing', () => {
            component['parseStatusCode']({ status_code: 'hello' });
            expect(component.status_code).toBe(421);
        });
    });
});

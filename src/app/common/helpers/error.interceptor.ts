import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SessionService } from '../services/session.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private sessionService:SessionService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError((err:any) => {
            if (err?.status === 401 || err?.status === 403 || err?.error?.errors[0]?.business == 'TSCPSECYAUTH422001') {
                this.sessionService.set(true);
            }

            const error = err?.error?.message ? err?.error?.message : err?.statusText;
            return throwError(err);
        }))
    }
}
import {HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let jsonReq: HttpRequest<any> = req;

        jsonReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer `
                }
            });
        return next.handle(jsonReq);
    }

}

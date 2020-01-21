import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoaderService} from '../services/loader.service';
import {Inject, Injectable} from '@angular/core';
import {finalize} from 'rxjs/operators';

@Injectable()
export class LoadingHttpInterceptor implements HttpInterceptor {

    constructor(private loaderService: LoaderService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.increment();
        return next.handle(req).pipe(
            finalize(() => this.loaderService.decrement())
        );
    }

}

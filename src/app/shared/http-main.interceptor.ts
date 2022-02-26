import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpMainInterceptor implements HttpInterceptor {
    constructor() {
    }

    // private headers = { 
    //     "Access-Control-Allow-Origin" : "*",
    //     "X-Custom-Header": "yes",
    //     "Access-Control-Allow-Methods": "*",
    //     "Access-Control-Allow-Headers": "'Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token'", 
    // }; 

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req.headers.set("X-Custom-Header", "yes");
        req.headers.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        return next.handle(req).pipe();
    }
}

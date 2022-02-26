import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpService {

    constructor(private httpClient: HttpClient) {
    }

    DoRequest(url: string){
        const params = {
            [Math.floor(Math.random() * 1000)]: ''
        };
        return this.httpClient.get<any>(url, {params});
    }
}

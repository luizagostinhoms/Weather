import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ConfigService } from '@ngx-config/core';

@Injectable({
    providedIn: 'root'
})
export class OpenWeatherMapService {

    constructor(private httpClient: HttpClient, private config: ConfigService) {}

    public getWeatherCity(city: string, countryCode: string) {
        return new Observable(observer => {
            
            let endPoint = this.config.getSettings('apiOpenweathermapEndpoint');    
            this.httpClient.get(endPoint+"?q="+city+ "," +countryCode).subscribe(
                    res => {
                        const info: any = res;
                        observer.next(info);
                        observer.complete();
                    },
                    err => {
                        return {};
                    }
                );
            
        });
    }
}



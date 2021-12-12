import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class RequestService {
    url: string = 'http://localhost:7071/api/HttpTrigger_Survey';

    public tableId: any;
    constructor(private http: HttpClient) {}

    postSensation(sensation: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            try {
                let sensationMap: any = {
                    '-2 Frío'  : -2,
                    '-1 Frío'  : -1,
                    '0 Bien'   : 0,
                    '+1 Calor' : 1,
                    '+2 Calor' : 2,
                }
                const date = new Date();
                const params = {
                    sensation: sensationMap[sensation],
                    table_id: parseInt(this.tableId),
                    temperature: '-',
                    sensor_time: date.toISOString(),
                    name: 1,
                };
                console.log(params);
                this.http.post(`${this.url}`, params).subscribe((res) => {
                    console.log('************* res *************');
                    console.log(res);
                    if (res) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                });
            } catch (error) {
                reject(error);
            }
        });
    }
}

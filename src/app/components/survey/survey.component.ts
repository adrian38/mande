import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { SplashComponent } from '../splash/splash.component';

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.scss'],
})
export class SurveyComponent implements OnInit {
    selectedSensation?: string;
    sensations: string[] = ['-2 Frío', '-1 Frío', '0 Bien','+1 Calor','+2 Calor'];

    constructor(private router: Router, public requestService: RequestService) {}

    ngOnInit(): void {}

    async sendSensation() {
        if (this.selectedSensation) {
            console.log('************* sensation *************');
            console.log(this.selectedSensation);
            this.router.navigate(['thanks']);
            try {
                const answer = await this.requestService.postSensation(this.selectedSensation);
                if (answer) {
                    console.log("oksldkadl");//ok
                } else {
                    console.log("not okdkadkandkan");
                }
                
            } catch (error) {
                console.log('************* error *************');
                console.log(error);
                
            }
            
        }
    }
}

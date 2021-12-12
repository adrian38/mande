import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  public static myOtherFuntion(){
   let y = 5
   return y; 
  }

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    setTimeout(()=>{
      console.log('*************** Hello ********************');
      this.router.navigate(['survey']);
    }, 3000);
  }
}


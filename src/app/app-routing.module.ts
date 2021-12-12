import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './components/splash/splash.component';
import { SurveyComponent } from './components/survey/survey.component';
import { TableComponent } from './components/table/table.component';
import { ThanksComponent } from './components/thanks/thanks.component';

let routes: Routes = [
  { path: 'splash', component: SplashComponent, },
  { path: 'survey', component: SurveyComponent, },
  { path: 'thanks', component:ThanksComponent},
  { path: 'table/:id', component: TableComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/splash' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CinemaComponent } from './cinema/cinema.component';
import { LoginComponent } from './admin/login/login.component';
import { MainComponent } from './admin/main/main.component';
import { authGuard } from './auth.guard';
import { LipunmyyntiComponent } from './lipunmyynti/lipunmyynti.component';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'templatedrivenform', component: TemplatedrivenformComponent },
  { path: 'reactiveform', component: ReactiveformComponent },
  { path: 'cinema', component: CinemaComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/main', component: MainComponent, canActivate: [authGuard], data: { targer: ['main'] } },
  { path: 'lipunmyynti', component: LipunmyyntiComponent },
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

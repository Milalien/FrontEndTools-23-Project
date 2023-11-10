import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { path: 'calculator', component: CalculatorComponent },
  { path: 'hello-world', component: HelloWorldComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

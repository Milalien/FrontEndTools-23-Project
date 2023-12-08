import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MatSliderModule } from '@angular/material/slider';
import { FeedbackComponent } from './feedback/feedback.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { CinemaComponent } from './cinema/cinema.component';
import { LoginComponent } from './admin/login/login.component';
import { MainComponent } from './admin/main/main.component';
//--- modules: ---
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
//--- pipes: ---
import { DatePipe } from '@angular/common';
import { MoviePipe } from './pipes/movie.pipe';
//--- Services: ---
import { CinemaService } from './services/cinema.service';
import { QuestionsService } from './services/questions.service';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CalculatorComponent,
    PagenotfoundComponent,
    FeedbackComponent,
    ToolbarComponent,
    TemplatedrivenformComponent,
    ReactiveformComponent,
    CinemaComponent,
    MoviePipe,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //--- modules: ---
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatSelectModule,
    MatToolbarModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatExpansionModule,
    HttpClientModule,
    DatePipe,
    //--- firebase: ---
    AngularFireModule.initializeApp(
      environment.firebase, 'angular-auth-firebase') as
    ModuleWithProviders<AngularFireModule>,
    AngularFireAuthModule

  ],
  providers: [QuestionsService, CinemaService, MoviePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

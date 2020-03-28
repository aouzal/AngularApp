import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FirstModule } from '../components/First/first.module';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { EmailService } from './email.service';
import { ResumePipe } from './resume.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaveriteComponent } from './faverite/faverite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { PostsComponent } from './posts/posts.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorIntercept } from './commun/Http-Error-interceptor';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RoutesModule } from './routes.module';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ResumePipe,
    FaveriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignUpFormComponent,
    PostsComponent,
    HomeComponent,
    PostDetailsComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FirstModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    RoutesModule
  ],
  providers: [CourseService, {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorIntercept,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

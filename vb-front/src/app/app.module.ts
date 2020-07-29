import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { HeaderComponent } from './_shared/header/header.component';
import { PromoteProjectComponent } from './home/promote-project/promote-project.component';
import { MatButtonModule } from '@angular/material/button';
import { NormalProjectComponent } from './home/normal-project/normal-project.component';
import { CalendarComponent } from './_shared/calendar-list/calendar/calendar.component';
import { CalendarItemComponent } from './_shared/calendar-list/calendar/calendar-item/calendar-item.component';
import { MainInfoComponent } from './project/main-info/main-info.component';
import { ShowBlockComponent } from './project/show-block/show-block.component';
import { CalendarListComponent } from './_shared/calendar-list/calendar-list.component';
import { TohtmlPipe } from './tohtml.pipe';
import { PromoteProjectReverseComponent } from './home/promote-project-reverse/promote-project-reverse.component';
import { CourseComponent } from './project/course/course.component';
import { VideoComponent } from './project/video/video.component';
import { AdvertiseComponent } from './project/advertise/advertise.component';
import {HttpClientModule} from '@angular/common/http';
import { GeneralItemComponent } from './project/general-item/general-item.component';
import { FixNavComponent } from './_shared/fix-nav/fix-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    HeaderComponent,
    PromoteProjectComponent,
    NormalProjectComponent,
    CalendarComponent,
    CalendarItemComponent,
    MainInfoComponent,
    ShowBlockComponent,
    CalendarListComponent,
    TohtmlPipe,
    PromoteProjectReverseComponent,
    CourseComponent,
    VideoComponent,
    AdvertiseComponent,
    GeneralItemComponent,
    FixNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

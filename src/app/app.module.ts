import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import { LessonsComponent } from './lessons/lessons.component';
import {DropdownDirective} from './dropdown.directive';
import { LessonTenComponent } from './lessons/lesson-ten/lesson-ten.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarNavComponent,
    DashboardComponent,
    LessonsComponent,
    DropdownDirective,
    LessonTenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

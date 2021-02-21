import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SidebarNavComponent} from './sidebar-nav/sidebar-nav.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {LessonsComponent} from './lessons/lessons.component';
import {DropdownDirective} from './dropdown.directive';
import {LessonTenComponent} from './lessons/lesson-ten/lesson-ten.component';
import { LessonTileComponent } from './lessons/lesson-tile/lesson-tile.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { ContentComponent } from './dashboard/content/content.component';
import { CoursesComponent } from './courses/courses.component';
import { DataService } from './services/data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarNavComponent,
    DashboardComponent,
    LessonsComponent,
    DropdownDirective,
    LessonTenComponent,
    LessonTileComponent,
    NavbarComponent,
    ContentComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

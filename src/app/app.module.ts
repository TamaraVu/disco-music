import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {DataService } from './services/data-service.service';
import {DropdownDirective} from './dropdown.directive';

import {AppComponent} from './app.component';
import {SidebarNavComponent} from './sidebar-nav/sidebar-nav.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LessonsComponent} from './lessons/lessons.component';
import {LessonTenComponent} from './lessons/lesson-ten/lesson-ten.component';
import {LessonTileComponent } from './lessons/lesson-tile/lesson-tile.component';
import {NavbarComponent } from './dashboard/navbar/navbar.component';
import {ContentComponent } from './dashboard/content/content.component';
import {CoursesComponent } from './courses/courses.component';
import {InstrumentTileComponent } from './courses/instrument-tile/instrument-tile.component';

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
    CoursesComponent,
    InstrumentTileComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

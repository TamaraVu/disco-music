import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {LessonsComponent} from './lessons/lessons.component';
import {LessonTenComponent} from './lessons/lesson-ten/lesson-ten.component';
import {ContentComponent} from './dashboard/content/content.component';
import {CoursesComponent} from './courses/courses.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'lessons', component: LessonsComponent},
  {path: 'lesson', component: LessonTenComponent},
  {path: 'courses', component: CoursesComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

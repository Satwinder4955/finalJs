import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { Routes, RouterModule } from '@angular/router';
import { StudentService } from './services/student.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: StudentsComponent }, // Set StudentsComponent as the default route
  { path: 'app', loadChildren: () => import('../app/app-routing.module').then(m => m.AppRoutingModule) },
  { path: 'student', loadChildren: () => import('../app/students/students.component').then(m => m.StudentsComponent) }
];


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [StudentService,],
  bootstrap: [AppComponent]
})
export class AppModule { }

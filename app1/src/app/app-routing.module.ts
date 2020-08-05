import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StaffComponent } from './staff/staff.component';
import { TestcompComponent } from './test/testcomp/testcomp.component';

const routes: Routes = [
 
  {path:'home',component:HomeComponent},
  {path:'student',component:StudentsComponent},
  {path:'staff',component:TestcompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

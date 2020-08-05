import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { StudentsComponent } from './students/students.component';
import { StaffComponent } from './staff/staff.component';
import { TestcompComponent } from './test/testcomp/testcomp.component';
import { RouterModule } from '@angular/router';
import { Routes} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    StaffComponent,
    TestcompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

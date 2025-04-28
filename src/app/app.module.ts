import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { AuthService } from './services/auth.service';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostCreateComponentComponent } from './post-create-component/post-create-component.component';
import { LoginComponent } from './login/login.component';
import { ChildcomComponent } from './comonents/childcom/childcom.component';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './add/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child2Component,
    PostListComponentComponent,
    PostCreateComponentComponent,
    LoginComponent,
    ChildcomComponent,
    AddComponent,
    DashboardComponent,
    EditComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

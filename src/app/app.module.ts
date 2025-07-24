import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CounterComponent } from './counter/counter.component';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { counterReducer } from './states/counter/counter.reducer';
import { ViewChildComponent } from './view-child/view-child.component';
import { CoutingComponent } from './view-child/couting/couting.component';
import { Couting2Component } from './view-child/couting2/couting2.component';
import { CommonModule } from '@angular/common';


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
    CounterComponent,
    ViewChildComponent,
  CoutingComponent,
  Couting2Component
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [AuthService,
    provideStore(),
    provideState({name: 'counter', reducer:counterReducer})

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

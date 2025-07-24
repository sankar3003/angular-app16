import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'dashboard',component: DashboardComponent},    // By default show this
   {path:'add',component: AddComponent},
  {path:'edit/:id',component: EditComponent},
  // { path: 'list',  
  //   component: PostListComponentComponent ,
  //   canActivate:[AuthGuard]

  // }, 
  //   { path: 'create',  
  //   component: PostCreateComponentComponent,  
  //   canActivate: [AuthGuard]}, 

  //   {
  //     path:'login',
  //     component: LoginComponent
  //   },
 

]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   providers:[AuthGuard]
})
export class AppRoutingModule { }

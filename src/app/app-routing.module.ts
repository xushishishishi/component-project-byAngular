import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo2ChildComponent } from './demo2-child/demo2-child.component';

const routes: Routes = [
  // 默认路径
  {
    path:"",redirectTo:"demo1",pathMatch:"full"
  },
  {
    path:"demo1",component:Demo1Component
  },
  {
    path:"demo2",component:Demo2Component
  },
  {
    path:"demo2/child",component:Demo2ChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

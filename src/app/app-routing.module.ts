import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';

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
    path:"child1",component:Child1Component
  },
  {
    path:"parent1",component:Parent1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Parent1Component } from './parent1/parent1.component';
import { Parent2Component } from './parent2/parent2.component';
import { Parent3Component } from './parent3/parent3.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';

const routes: Routes = [
  // 默认路径
  {
    path: "", redirectTo: "demo1", pathMatch: "full"
  },
  {
    path: "demo1", component: Demo1Component
  },
  {
    path: "demo2", component: Demo2Component
  },
  {
    path: "child1", component: Child1Component
  },
  {
    path: "child2", component: Child2Component
  },
  {
    path: "child3", component: Child3Component
  },
  {
    path: "parent1", component: Parent1Component
  },
  {
    path: "parent2", component: Parent2Component
  },
  {
    path: "parent3", component: Parent3Component
  },
  {
    path: "serviceDemo", component: ServiceDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

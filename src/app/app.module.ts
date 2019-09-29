import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Parent3Component } from './parent3/parent3.component';

@NgModule({
  // 属于此NgModule 的组件，指令和管道……自身组件
  declarations: [
    AppComponent,
    Demo1Component,
    Demo2Component,
    Parent1Component,
    Child1Component,
    ServiceDemoComponent,
    Parent2Component,
    Child2Component,
    Child3Component,
    Parent3Component
  ],
  // 在此 NgModule中声明的组件模板需要其类导出的其他模块……导入的组件
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule,
  ],
  // 创造者服务，这NgModule有助于服务的全球征集; 它们可以在应用的所有部分中访问。（您也可以在组件级别指定提供程序，这通常是首选。）
  providers: [],
  // 主应用程序视图，称为root组件，承载所有其他应用程序视图。只有根NgModule才能设置该bootstrap属性。
  bootstrap: [AppComponent]
})

// 声明的子集，在其他NgModule 的组件模板中应该是可见的并且可以使用。
// 此处包含 的export属性以AppComponent供说明；在此示例中，它实际上不是必需的。根NgModule没有理由导出任何东西，因为其他模块不需要导入根NgModule。
export class AppModule { }

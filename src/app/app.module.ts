import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import { SqrtPipe } from '../app.Sqrt';
import { MydirectDirective } from './mydirect.directive';
import { MiddelnameDirective } from './middelname.directive';
import { LastnameDirective } from './lastname.directive';
import { InformationDirective } from './information.directive';
import { TestComponent } from './test/test.component';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo.component';
import {DateserviceService } from './dateservice.service';
import { HttpClientModule} from '@angular/common/http';
import { IntroRxjsComponent } from './intro-rxjs/intro-rxjs.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    SqrtPipe,
    MydirectDirective,
    MiddelnameDirective,
    LastnameDirective,
    InformationDirective,
    TestComponent,
    ReactiveDemoComponent,
    IntroRxjsComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DateserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

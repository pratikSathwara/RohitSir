import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';



const routes: Routes = [{
  path:'createmloyee',
  component:'EmployeeCreateComponent',
},
{
  path:'editemployee/:id',
  component:'EmployeeEditComponent'
},
{
  path:'listemployee',
  component:'EmployeeListComponent'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

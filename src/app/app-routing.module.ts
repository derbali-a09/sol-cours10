import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';
import { EmployesComponent } from './employes/employes.component';

const routes: Routes = [
  {path:"employes", component: EmployesComponent},
  {path:"employes/:ref", component: DetailsComponent},
  {path:"add", component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

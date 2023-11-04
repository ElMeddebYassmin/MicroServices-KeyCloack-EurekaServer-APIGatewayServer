import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListOfDepartementsComponent} from "./list-of-departements/list-of-departements.component";
import {AddComponent} from "./add/add.component";
import {ConfirmationDialogComponent } from '../Contrat/confirmation-dialog/confirmation-dialog.component';

const routes: Routes=[
  {path:"", component:ListOfDepartementsComponent},
    {path:"addP", component:AddComponent},
    {path:"dialog", component: ConfirmationDialogComponent}
]

@NgModule({
  imports: [CommonModule,
      RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class DepartementRoutingModule { }

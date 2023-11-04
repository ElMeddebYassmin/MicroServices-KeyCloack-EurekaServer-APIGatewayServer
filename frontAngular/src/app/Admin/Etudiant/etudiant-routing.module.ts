import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AddComponent} from "./add/add.component";
import {ConfirmationDialogComponent } from '../Contrat/confirmation-dialog/confirmation-dialog.component';
import { ListOfEtudiantsComponent } from './list-of-etudiants/list-of-etudiants.component';

const routes: Routes=[
  {path:"", component:ListOfEtudiantsComponent},
    {path:"addP", component:AddComponent},
    {path:"dialog", component: ConfirmationDialogComponent}
]

@NgModule({
  imports: [CommonModule,
      RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class EquipeRoutingModule { }

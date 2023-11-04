import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";


const routes: Routes = [
  {path: "",redirectTo: "dashboard",pathMatch: "full",},

  {path: "",component: AdminLayoutComponent,children: [{path: "",loadChildren: () =>
          import("./layouts/admin-layout/admin-layout.module").then((m) => m.AdminLayoutModule),},],
  },
  {path: "Contrat",component: AdminLayoutComponent,children: [{path: "",loadChildren: ()=>
          import("./Admin/Contrat/contrat.module").then((m) => m.ContratModule),},],
  },
  {path: "Universite",component: AdminLayoutComponent,children: [{path: "",loadChildren: ()=>
  import("./Admin/Universite/universite.module").then((m) => m.UniversiteModule),},],
},

{path: "Departement",component: AdminLayoutComponent,children: [{path: "",loadChildren: ()=>
import("./Admin/Departement/departement.module").then((m) => m.DepartementModule),},],
},
  

{path: "Equipe",component: AdminLayoutComponent,children: [{path: "",loadChildren: ()=>
import("./Admin/Equipe/equipe.module").then((m) => m.EquipeModule),},],
},

{path: "Etudiant",component: AdminLayoutComponent,children: [{path: "",loadChildren: ()=>
import("./Admin/Etudiant/etudiant.module").then((m) => m.EtudiantModule),},],
},


];
 
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}

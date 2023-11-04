import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
// import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { AdminLayoutModule } from "./layouts/admin-layout/admin-layout.module";

import { MatInputModule } from "@angular/material/input";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { MatChipsModule } from "@angular/material/chips";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatCardModule } from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ConfirmDialogComponent } from "./Admin/Contrat/confirm-dialog/confirm-dialog.component";
import { UniversiteModule } from "./Admin/Universite/universite.module";
import { ConfirmationDialogComponent } from "./Admin/Contrat/confirmation-dialog/confirmation-dialog.component";



@NgModule({
    declarations: [
 AppComponent,
 AdminLayoutComponent,
 ConfirmDialogComponent,
 ConfirmationDialogComponent,
    ],  
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        MatIconModule,
        MatButtonModule,
        AdminLayoutModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatChipsModule,
        NgbModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatDialogModule,
        MatTableModule,
        MatInputModule, 
      
      
        MatCardModule,     
        MatTooltipModule,
        DragDropModule,
    ]
})
export class AppModule {}

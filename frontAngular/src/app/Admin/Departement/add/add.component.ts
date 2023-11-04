import { DepartementService } from './../../../Services/ServicesDepartement/departementservice.service';
import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Departement } from 'app/models/Departement';
import { ListOfDepartementsComponent } from '../list-of-departements/list-of-departements.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  departementForm: FormGroup;
  prixControl:FormControl;
  departement:Departement;

selected: Date | null;
    @Output()list=new EventEmitter()

  constructor(private _formBuilder: FormBuilder, private dialogRef: MatDialogRef<ListOfDepartementsComponent>,
              private serviceC:DepartementService,private _routerUp: Router) { }

    departements:Departement[]=[]

  ngOnInit(): void {
      this.serviceC.getAllDepartements().subscribe((data)=>{
          console.log(data)
      })

      this.departementForm = this._formBuilder.group({
        nomDepart: ['', Validators.required],
      })
  }

  submit(f:any){
      this.departement=f;
     this.serviceC.saveDepartement(this.departement).subscribe((c)=>{
         this.list.emit(this.departement);
         this.reloadComponent()
         console.log("Success !", c)
     });
      this.dialogRef.close()
      console.log('A new project added to the database');
      console.log("*****",f)
      this.dialogRef.close(`${f}`);
  }
  reloadComponent() {
    this._routerUp.routeReuseStrategy.shouldReuseRoute = () => false;
    this._routerUp.onSameUrlNavigation = 'reload';
    this._routerUp.navigate(['/Departement']);

}

}


import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Contrat } from 'app/models/Contrat';
import { ContratService } from 'app/Services/ContratService/contrat.service';
import { ListOfUniversitesComponent } from '../list-of-universites/list-of-universites.component';
import { Universite } from 'app/models/Universite';
import { UniversiteserviceService } from 'app/Services/ServicesUniversite/universiteservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  universiteForm: FormGroup;
 
 
  universite:Universite;

selected: Date | null;
    @Output()list=new EventEmitter()

  constructor(private _formBuilder: FormBuilder, private dialogRef: MatDialogRef<ListOfUniversitesComponent>,
              private serviceC:UniversiteserviceService,private _routerUp: Router ) { }

    Universite:Universite[]=[]
   
  ngOnInit(): void {
      this.serviceC.getAllUniversites().subscribe((data)=>{
          console.log(data)
      })

      this.universiteForm = this._formBuilder.group({
        nomUniv: ['', Validators.required],
        
      })

     


     

  }

  submit(f:any){
      this.universite=f;
     this.serviceC.saveUniversite(this.universite).subscribe((c)=>{
         this.list.emit(this.universite);
         this.reloadComponent();
         console.log("Success !", c)
     });
      this.dialogRef.close()
      console.log('A new university added to the database');
      console.log("*****",f)
      this.dialogRef.close(`${f}`);
  }
  reloadComponent() {
    this._routerUp.routeReuseStrategy.shouldReuseRoute = () => false;
    this._routerUp.onSameUrlNavigation = 'reload';
    this._routerUp.navigate(['/Universite']);

}

}


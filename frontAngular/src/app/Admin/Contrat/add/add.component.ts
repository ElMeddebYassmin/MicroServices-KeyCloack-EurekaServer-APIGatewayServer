import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Contrat } from 'app/models/Contrat';
import { ContratService } from 'app/Services/ContratService/contrat.service';
import { ListOfContratsComponent } from '../list-of-contrats/list-of-contrats.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  contractForm: FormGroup;
  prixControl:FormControl;
  prixGroups:PrixGroup[]=[]
  contrat:Contrat;

selected: Date | null;
    @Output()list=new EventEmitter()

  constructor(private _formBuilder: FormBuilder, private dialogRef: MatDialogRef<ListOfContratsComponent>,
              private serviceC:ContratService,private _routerUp: Router) { }

    contrats:Contrat[]=[]
    specialites: Specialite[] = [
        {value: 'IA', viewValue: 'IA'},
        {value: 'RESEAU', viewValue: 'RESEAU'},
        {value: 'CLOUD', viewValue: 'CLOUD'},
        {value: 'SECURITE', viewValue: 'SECURITE'},
        {value: 'WEB', viewValue: 'WEB'},

      
    ];

  ngOnInit(): void {
      this.serviceC.getAllContrats().subscribe((data)=>{
          console.log(data)
      })

      this.contractForm = this._formBuilder.group({
          dateDebutContrat: ['', Validators.required],
          dateFinContrat: ['', Validators.required],
          specialite: ['', Validators.required],
          montantContrat: ['', Validators.required],
      })

      // this.contractForm=this._formBuilder.group({
      //     dateDC: this.data.dateDC ? this.data.dateDC:'',
      //     dateFC:this.data.dateFC ? this.data.dateFC:'',
      //     specialite:this.data.specialite ? this.data.specialite:'',
      //     prix: this.data.prix ? this.data.prix:''
      // })


      this.prixGroups= [
          {
              name: 'Prix/Trimestre',
              pokemon: [
                  {value: '1600', viewValue: '1600 DT'},
              ],
          },
          {
              name: 'Prix/Semestre',
              pokemon: [
                  {value: '3600', viewValue: '3600 DT'},
              ],
          },
          {
              name: 'Prix/Année',
              pokemon: [
                  {value: '7500', viewValue: '7500 DT'},
              ],
          },
      ];

  }

  submit(f:any){
      this.contrat=f;
     this.serviceC.saveContrat(this.contrat).subscribe((c)=>{
         this.list.emit(this.contrat);
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
    this._routerUp.navigate(['/Contrat']);

}

}
interface Specialite {
    value: string;
    viewValue: string;
}
interface Pokemon {
    value: string;
    viewValue: string;
}

interface PrixGroup {
    disabled?: boolean;
    name: string;
    pokemon: Pokemon[];
}

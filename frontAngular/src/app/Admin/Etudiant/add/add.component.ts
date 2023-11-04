import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ListOfEtudiantsComponent } from '../list-of-etudiants/list-of-etudiants.component';
import { EtudiantserviceService } from 'app/Services/ServicesEtudiant/etudiantservice.service';
import { Etudiant } from 'app/models/Etudiant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  etudiantForm: FormGroup;
  prixControl:FormControl;
  prixGroups:PrixGroup[]=[]
  etudiant:Etudiant;

selected: Date | null;
    @Output()list=new EventEmitter()

  constructor(private _formBuilder: FormBuilder, private dialogRef: MatDialogRef<ListOfEtudiantsComponent>,
              private serviceC:EtudiantserviceService,private _routerUp: Router) { }

    etudiants:Etudiant[]=[]
    options: Specialite[] = [
      {value: 'GAMIX', viewValue: 'GAMIX'},
      {value: 'SE', viewValue: 'SE'},
      {value: 'SAE', viewValue: 'SAE'},
      {value: 'INFINI', viewValue: 'INFINI'}
    ];

  ngOnInit(): void {
      this.serviceC.getEtudiants().subscribe((data)=>{
          console.log(data)
      })

      this.etudiantForm = this._formBuilder.group({
          nomE: ['', Validators.required],
          prenomE: ['', Validators.required],
          op: ['', Validators.required],
          
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
      this.etudiant=f;
     this.serviceC.saveEtudiant(this.etudiant).subscribe((c)=>{
         this.list.emit(this.etudiant);
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
    this._routerUp.navigate(['/Etudiant']);

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

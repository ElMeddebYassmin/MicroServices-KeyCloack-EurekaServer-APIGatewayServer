import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Equipe } from 'app/models/Equipe';
import { ListOfEquipesComponent } from '../list-of-equipes/list-of-equipes.component';
import { EquipeService } from 'app/Services/ServicesEquipes/equipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  equipeForm: FormGroup;
  
 equipe:Equipe;

selected: Date | null;
    @Output()list=new EventEmitter()

  constructor(private _formBuilder: FormBuilder, private dialogRef: MatDialogRef<ListOfEquipesComponent>,
              private serviceC:EquipeService,private _routerUp: Router) { }

    equipes:Equipe[]=[]  
    niveaux:Specialite[]= [
        {value: 'JUNIOR', viewValue: 'JUNIOR'},
        {value: 'SENIOR', viewValue: 'SENIOR'},
        {value: 'EXPERT', viewValue: 'EXPERT'},
      
    ];

  ngOnInit(): void {
      this.serviceC.getEquipes().subscribe((data)=>{
          console.log(data)
      })

      this.equipeForm = this._formBuilder.group({
           nomEquipe: ['', Validators.required],
          niveau: ['', Validators.required],
        
      })

  



  }

  submit(f:any){
      this.equipe=f;
     this.serviceC.saveEquipe(this.equipe).subscribe((c)=>{
         this.list.emit(this.equipe);
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
    this._routerUp.navigate(['/Equipe']);

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

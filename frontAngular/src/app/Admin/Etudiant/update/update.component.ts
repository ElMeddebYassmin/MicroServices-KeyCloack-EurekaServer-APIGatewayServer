import {Component, EventEmitter, Input, OnInit, Output, Type} from '@angular/core';
import {ContratService} from "../../../Services/ContratService/contrat.service";
import {Contrat} from "../../../models/Contrat";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { EquipeService } from 'app/Services/ServicesEquipes/equipe.service';
import { Etudiant } from 'app/models/Etudiant';
import { EtudiantserviceService } from 'app/Services/ServicesEtudiant/etudiantservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  @Output() requested = new EventEmitter<any>();
  @Input()ctrct:any;
  etudiantForm: FormGroup;


  constructor(private cService:EtudiantserviceService, private _formBuilder:FormBuilder,private _routerUp: Router) { }

  ngOnInit(): void {


    this.etudiantForm = this._formBuilder.group({
      nomE: ['', Validators.required],
      prenomE: ['', Validators.required],
      op: ['', Validators.required],
     
    })

   

  }

  
  options = [
    {value: 'GAMIX', viewValue: 'GAMIX'},
    {value: 'SE', viewValue: 'SE'},
    {value: 'SAE', viewValue: 'SAE'},
    {value: 'INFINI', viewValue: 'INFINI'},
  
];

  updateEtudiant(e:Etudiant){

    this.cService.updateEtudiant(this.ctrct.idEtudiant, e).subscribe((data)=>{
      console.log(data);
      this.reloadComponent();
    })
  }

  reloadComponent() {
    this._routerUp.routeReuseStrategy.shouldReuseRoute = () => false;
    this._routerUp.onSameUrlNavigation = 'reload';
    this._routerUp.navigate(['/Etudiant']);

}
}

import {Component, EventEmitter, Input, OnInit, Output, Type} from '@angular/core';
import {ContratService} from "../../../Services/ContratService/contrat.service";
import {Contrat} from "../../../models/Contrat";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { EquipeService } from 'app/Services/ServicesEquipes/equipe.service';
import { Equipe } from 'app/models/Equipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  @Output() requested = new EventEmitter<any>();
  @Input()ctrct:any;
  equipeForm: FormGroup;


  constructor(private cService: EquipeService, private _formBuilder:FormBuilder,private _routerUp: Router) { }

  ngOnInit(): void {


    this.equipeForm = this._formBuilder.group({
      nomEquipe: ['', Validators.required],
      niveau: ['', Validators.required],
     
    })

   

  }

  
  niveaux = [
      {value: 'JUNIOR', viewValue: 'JUNIOR'},
      {value: 'SENIOR', viewValue: 'SENIOR'},
      {value: 'EXPERT', viewValue: 'EXPERT'},
    
  ];

  updateEquipe(e:Equipe){
   console.log(e);
    this.cService.updateEquipe(this.ctrct.idEquipe, e).subscribe((data)=>{
      console.log(data);
      this.reloadComponent();
    })
  }
  reloadComponent() {
    this._routerUp.routeReuseStrategy.shouldReuseRoute = () => false;
    this._routerUp.onSameUrlNavigation = 'reload';
    this._routerUp.navigate(['/Equipe']);

}
}

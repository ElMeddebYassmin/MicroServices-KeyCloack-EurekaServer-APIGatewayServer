import {Component, EventEmitter, Input, OnInit, Output, Type} from '@angular/core';
import {ContratService} from "../../../Services/ContratService/contrat.service";
import {Contrat} from "../../../models/Contrat";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UniversiteserviceService } from 'app/Services/ServicesUniversite/universiteservice.service';
import { Universite } from 'app/models/Universite';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  @Output() requested = new EventEmitter<any>();
  @Input()ctrct:any;
  universiteForm: FormGroup;
  

  constructor(private cService: UniversiteserviceService, private _formBuilder:FormBuilder,private _routerUp: Router) { }

  ngOnInit(): void {


    this.universiteForm = this._formBuilder.group({
      nomUniv: ['', Validators.required],    
    })

  

  }

  
  updateUniversite(c:Universite){
    this.cService.updateUniversite(this.ctrct.idUniversite, c).subscribe((data)=>{
      console.log(data);
      this.reloadComponent();
    })
  }
  reloadComponent() {
    this._routerUp.routeReuseStrategy.shouldReuseRoute = () => false;
    this._routerUp.onSameUrlNavigation = 'reload';
    this._routerUp.navigate(['/Universite']);

}
}


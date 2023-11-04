import {Component, EventEmitter, Input, OnInit, Output, Type} from '@angular/core';
import {Departement} from "../../../models/Departement";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { DepartementService } from 'app/Services/ServicesDepartement/departementservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  @Output() requested = new EventEmitter<any>();
  @Input()ctrct:any;
  departementForm: FormGroup;

  constructor(private dService: DepartementService, private _formBuilder:FormBuilder,private _routerUp: Router) { }

  ngOnInit(): void {
    this.departementForm = this._formBuilder.group({
      nomDepart: ['', Validators.required],
    })


  }


  updateDepartement(d:Departement){
  
    this.dService.updateDepartement(this.ctrct.idDepartement, d).subscribe((data)=>{
      console.log(data);
      this.reloadComponent();
    })
  }

  reloadComponent() {
    this._routerUp.routeReuseStrategy.shouldReuseRoute = () => false;
    this._routerUp.onSameUrlNavigation = 'reload';
    this._routerUp.navigate(['/Departement']);

}
}


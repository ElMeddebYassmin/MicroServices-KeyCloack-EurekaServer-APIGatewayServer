import {Component, CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit} from '@angular/core';
import {formatDate} from "@angular/common";
import {Contrat} from "../../../models/Contrat";
import {ContratService} from "../../../Services/ContratService/contrat.service";
import {Router} from "@angular/router";
import {FormBuilder, FormControl } from '@angular/forms';
import {map, startWith} from "rxjs/operators";
import {combineLatest, filter, Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {PageEvent} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ConfirmDialogModel} from "../../Contrat/confirmation-dialog/confirmation-dialog.component";
import {AddComponent} from "../add/add.component";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ConfirmDialogComponent } from '../../Contrat/confirm-dialog/confirm-dialog.component';
import { Universite } from 'app/models/Universite';
import { UniversiteserviceService } from 'app/Services/ServicesUniversite/universiteservice.service';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-list-of-universites',
  templateUrl: './list-of-universites.component.html',
  styleUrls: ['./list-of-universites.component.scss']
})


export class ListOfUniversitesComponent implements OnInit {

  @NgModule({
    declarations: [ListOfUniversitesComponent],
    exports: [ListOfUniversitesComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })

  filterText: string='';

  fileNameDialogRef: MatDialogRef<AddComponent>;

  showUpdate=false;
  clickedAdd : boolean = false;
 universiteBinding: any;

  searchText:string='';
  result: boolean;

  currentDate = new Date();
  cValue = formatDate(this.currentDate, 'dd-MM-yyyy', 'en-US');

  universites: Universite[]=[];
 
  nbrp: number = 1;
  totalElements: any;
  pageIndex: any;
  pageSize: any;


  constructor(private router: Router,private serviceC: UniversiteserviceService, private formBuilder: FormBuilder,
              private dialog: MatDialog) { }


  ngOnInit(): void {
    this.ListOfUniversites({page:"0", size:"5"})
   
  }
  
  showUpdateForm(f:any){
    this.universiteBinding=f;
    this.showUpdate=true;
  }

  onCreate(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.width="25%";
    this.fileNameDialogRef = this.dialog.open(AddComponent, dialogConfig)
  
  }

 
  $event: any;


  /*****************************SEARCH************************************/

  onSearchTextEntered(searchValue:string) {
    this.searchText = searchValue;
    console.log(this.searchText)
    console.log(this.pageSize)
  }


  /*****************************Liste Des Contrats********************************/
  ListOfUniversites(request){
    this.serviceC.getAllUniversites().subscribe((data)=>{
      this.universites=data;
      this.totalElements=data['totalElements']
      this.pageIndex = data['number']
      this.pageSize = data['size'];
      console.log(data);
    },error=>{
      console.log(error)
      this.router.navigate(['/errorPage'])
    });}

  /*****************************Supprimer Contrat********************************/
  confirmDialog(id:any) {
    const message = `Are you sure you want to do this?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);


    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData, id
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      console.log(dialogResult)
      if (this.result==true){
        this.serviceC.deleteUniversite(id).subscribe((d)=>{
          this.ListOfUniversites(null)
          console.log("done")
        })
      }
    });
  }


  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.ListOfUniversites(request);
  }

  addUniversite(u:Universite) {
    this.universites.push(u);
  }
}

import { Injectable } from '@angular/core';
import {Contrat} from "../../models/Contrat";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  contrats:Contrat[]=[];
  url=environment.baseUrl+'contrat';

  constructor(private http: HttpClient) { }

  /********************************Add Contrat************************************/
  saveContrat(contrat: Contrat):Observable<Contrat>{
    console.log("save ok ");
    return this.http.post<Contrat>(this.url +'/add-contrat', contrat);
    
  }

  /********************************Delete Contrat************************************/
  deleteContrat(id:number):Observable<any>{
    return this.http.delete(`${this.url+"/remove-contrat"}/${id}`, {responseType: 'text'});
  }

  /********************************Get Contrats************************************/
  getAllContrats(): Observable<Contrat[]>{
 
    return this.http.get<Contrat[]>(this.url+'/retrieve-all-contrats') 
    }

  /********************************Update Contrat************************************/
  updateContrat(id:number, d:any):Observable<any>{
    return this.http.put<Contrat>(this.url+"/update-contrat/"+id, d);
  }
}

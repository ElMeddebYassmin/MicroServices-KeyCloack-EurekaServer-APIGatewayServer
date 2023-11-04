import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etudiant } from 'app/models/Etudiant';
import { environment } from 'environments/environment';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class EtudiantserviceService {
  etudiants:Etudiant[]=[];
  url=environment.baseUrl+'etudiant';

  constructor(private http: HttpClient) { }

  /********************************Add Etudiant************************************/
  saveEtudiant(etudiant: Etudiant):Observable<Etudiant>{
    return this.http.post<Etudiant>(this.url +'/add-etudiant', etudiant);
  }

 

  /********************************Get Etudiant************************************/
  getEtudiants(): Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(this.url+'/retrieve-all-etudiants') 
  
  }

  /********************************Update Etudiant************************************/
  updateEtudiant(id:number, d:any):Observable<any>{
    return this.http.put<Etudiant>(this.url+"/update-etudiant/"+id, d);


  
  }

   /********************************Delete Etudiant************************************/
   deleteEtudiant(id:number):Observable<any>{
    return this.http.delete(`${this.url+"/remove-etudiant"}/${id}`, {responseType: 'text'});
  }
}

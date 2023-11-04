import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departement } from 'app/models/Departement';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  departements:Departement[]=[];
  url=environment.baseUrl+'departement';

  constructor(private http: HttpClient) { }

  /********************************Add Departement************************************/
  saveDepartement(departement: Departement):Observable<Departement>{
    return this.http.post<Departement>(this.url +'/add-departement', departement);
  }

  /********************************Delete Departement************************************/
  deleteDepartement(id:number):Observable<any>{
    return this.http.delete(`${this.url+"/delete-departement"}/${id}`, {responseType: 'text'});
  }

  /********************************Get Departements************************************/
  getAllDepartements(): Observable<Departement[]>{
    return this.http.get<Departement[]>(this.url+'/retrieve-all-departements')  }

  /********************************Update Departement************************************/
  updateDepartement(id:number, d:any):Observable<any>{
    return this.http.put<Departement>(this.url+"/update-departement/"+id, d);
  }

}
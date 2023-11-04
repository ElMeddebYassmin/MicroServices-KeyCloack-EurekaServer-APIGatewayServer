import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipe } from 'app/models/Equipe';
import {catchError, delay, Observable, of, retry, throwError} from 'rxjs';
//import { getSystemErrorMap } from 'util'; 
import {NgForm} from '@angular/forms';
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';
//import * as http from 'http';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  equipes:Equipe[]=[];
  url=environment.baseUrl+'equipe';

  constructor(private http: HttpClient) { }

  /********************************Add Equipe************************************/
  saveEquipe(equipe: Equipe):Observable<Equipe>{
    return this.http.post<Equipe>(this.url +'/add-equipe', equipe);
  }

 

  /********************************Get Equipe************************************/
  getEquipes(): Observable<Equipe[]>{
    return this.http.get<Equipe[]>(this.url+'/retrieve-all-equipes/') 
  
  }

  /********************************Update Equipe************************************/
  updateEquipe(id:number, d:any):Observable<any>{
    return this.http.put<Equipe>(this.url+"/update-equipe/"+id, d);
   
    
  }

   /********************************Delete Equipe************************************/
   deleteEquipe(id:number):Observable<any>{
    return this.http.delete(`${this.url+"/remove-equipe"}/${id}`, {responseType: 'text'});
  }
}

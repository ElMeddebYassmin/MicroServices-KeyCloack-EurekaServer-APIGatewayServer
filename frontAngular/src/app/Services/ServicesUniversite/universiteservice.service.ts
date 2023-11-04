import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Universite } from 'app/models/Universite';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversiteserviceService {
  universites:Universite[]=[];
  url=environment.baseUrl+'universite/';

  constructor(private http: HttpClient) { }

  /********************************Add Universite************************************/
  saveUniversite(universite: Universite):Observable<Universite>{
    return this.http.post<Universite>(this.url +'add-universite', universite);
  }

 

  /********************************Get Universite************************************/
  getAllUniversites(): Observable<Universite[]>{
    return this.http.get<Universite[]>(this.url+'retrieve-all-universites/') 
  
  }

  /********************************Update Universite************************************/
  updateUniversite(id:number, d:any):Observable<any>{
    return this.http.put<Universite>(this.url+"update-universite/"+id, d)


    
  }
  /********************************Delete Universite************************************/
  deleteUniversite(id:number):Observable<any>{
    return this.http.delete(`${this.url+"remove-universite"}/${id}`, {responseType: 'text'});
  }

}



import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Company } from '../models/company';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private companyRef: AngularFirestoreDocument<Company>;
  constructor(private db: AngularFirestore) {
    this.companyRef = this.db.doc<Company>('companies/cD1BOxgt8PmdPAYRQpfl');
  }
  getCompanyObservable(): Observable<Company>{
    return this.companyRef.valueChanges();
  }
  saveCompany(company: Company){
    this.companyRef.set(company);
  }
  editCompany(company: any){
    this.companyRef.update(company);
  }
}

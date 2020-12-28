import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrearproveedorService {

  date = new Date();


  constructor(private http: HttpClient) { }



  crearLegalPerson(legalPerson: any) {

    legalPerson.userProviderName = ' ';
    legalPerson.userProviderLastname = ' ';
    legalPerson.providertypeId = '2';
    legalPerson.accountinguserId = '2';
    legalPerson.userProviderNit =  `${legalPerson.documentType}${legalPerson.userProviderNit}`;
    legalPerson.userProviderDateCreated = this.date;

    return this.http.post<Boolean>(`http://52.247.56.140:8080/createUser`, legalPerson);
  }

  crearNaturalPerson(naturalPerson: any) {


    /*
    naturalPerson = {
      "userProviderNit": "1022981372",
      "userProviderName": "Angela23",
      "userProviderLastname": "Garcia2",
      "userProviderEmail": "elcorreo3@hotmail.com",
      "userProviderEmailApprover": "otrocorreo3@hotmail.com",
      "userProviderNameCompany":  " ",
      "userProviderDateCreated":  "21/11/2020",
      "userProviderType": "Medico",
      "providertypeId": "1",
      "accountinguserId" : "2"
    }
    */

    naturalPerson.accountinguserId = "2";
    naturalPerson.userProviderDateCreated = this.date;
    naturalPerson.userProviderNit =  `${naturalPerson.documentType}${naturalPerson.userProviderNit}`;

    return this.http.post<any>(`http://52.247.56.140:8080/createUser`, naturalPerson);
  }


}

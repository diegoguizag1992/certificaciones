import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrearproveedorService {

  constructor(private http: HttpClient) { }



  crearLegalPerson(legalPerson: any) {

    console.log("Test 13", legalPerson);

    legalPerson = {
      "userProviderNit": "1022981369",
      "userProviderName": "Angela23",
      "userProviderLastname": "Garcia2",
      "userProviderEmail": "elcorreo3@hotmail.com",
      "userProviderEmailApprover": "otrocorreo3@hotmail.com",
      "userProviderNameCompany":  " ",
      "userProviderDateCreated":  "21/11/2020",
      "userProviderType": "Medico",
      "providertypeId": 1,
      "accountinguserId" : "2"
    }

    console.log(legalPerson);

    http://52.247.56.140:8080/createUser

    return this.http.post<Boolean>(`http://52.247.56.140:8080/createUser`, legalPerson);
  }

  crearNaturalPerson(naturalPerson: any) {

    console.log("Test 12", naturalPerson);

    naturalPerson = {
      "userProviderNit": "1022981370",
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

    console.log(naturalPerson);
    return this.http.post<any>(`http://52.247.56.140:8080/createUser`, naturalPerson);
  }


}

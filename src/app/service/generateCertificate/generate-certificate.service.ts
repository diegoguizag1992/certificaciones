import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateCertificateService {


  constructor(private http: HttpClient) { }


  queryCertificate(listYears: any): any {

    return this.http.post(`http://52.247.56.140:8080/listYears`, listYears);

  }

  listMonths(listYears): any {

    console.log(listYears);


    return this.http.post(`http://52.247.56.140:8080/listMonths`, listYears);

  }

  generateCertificate(dataList): any {

    return this.http.post(`http://52.247.56.140:8080/generateCertificate`, dataList);

  }

  }



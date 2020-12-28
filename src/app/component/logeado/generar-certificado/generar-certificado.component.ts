import { GenerateCertificateService } from './../../../service/generateCertificate/generate-certificate.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

 //import * as pdfMake from 'pdfmake/build/pdfmake.js'; // Could not find a declaration file for
                                                     // module 'pdfmake/build/pdfmake.js'
 // import * as pdfFonts from 'pdfmake/build/vfs_fonts';
// import { NgxSpinnerService } from 'ngx-spinner';

//import { PdfMakeWrapper } from 'pdfmake-wrapper';
// import pdfFonts from 'node_modules/pdfmake/build/vfs_fonts';
// ./pdfmake/build/vfs_fonts';

// import pdfFonts from "pdfmake/build/vfs_fonts"; // fonts provided for pdfmake

// Set the fonts to use
// PdfMakeWrapper.setFonts(pdfFonts);

// import * as  jsPDF  from "jspdf";


@Component({
  selector: 'app-generar-certificado',
  templateUrl: './generar-certificado.component.html',
  styleUrls: ['./generar-certificado.component.less']
})
export class GenerarCertificadoComponent implements OnInit {


  resolvePassword: FormGroup;
  hide = true;
  hideConfirm = true;
  periodicidad = true;
  document = 'Seleccione';
  certifiedYearValue = 'Seleccione';
  certifiedPeriodValue = 'Seleccione';
  certifiedMunicipalityValue = 'Seleccione';
  certifiedPeriodicityValue = 'Seleccione';


  datos: any = {};
  servicios: any[] = [];
  filteredServList: Observable<any>;
  myControl = new FormControl();
  period: any[] = [];
  dataListCertificate: any[] = [];
  filteredPeriod: Observable<any>;


  iconPass: string = 'visibility_off';
  view: string = 'password';
  uid: "agarcia1";
  certifiedYear = false;
  certifiedPeriodicity = false;
  certifiedPeriod = false;
  certifiedMunicipality = false;
  certifiedYearSpinner = false;
  pdfMake: any;


  constructor(private fb: FormBuilder,
              private generateCertificate: GenerateCertificateService,
              // public spinnerService: NgxSpinnerService,
              ) { }

  ngOnInit(): void {

    // (window as any).pdfMake.vfs = pdfFonts.pdfMake.vfs;
    // PdfMakeWrapper.setFonts(pdfFonts);
    this.filterCertificate();
  }

  filterCertificate() {

    this.resolvePassword = this.fb.group({
      documentType: ['', [Validators.required]],
      servicio: [''],
      period: [''],
      periocidad: ['',],
      municipio: ['', [Validators.required]],
    });

  }

  selectDocumentType(document: string) {

    console.log("entro");
   // this.spinnerService.show();
    this.certifiedYearSpinner = true;


    this.datos.nitTercero = '860350624-7';
    this.datos.typeCertificate = document;

    this.generateCertificate.queryCertificate(this.datos).subscribe(
      (data) => {

      //  this.spinnerService.hide();
        this.certifiedYear = true;
        console.log(data);
        this.servicios = data;
        console.log("Datos prueba", this.servicios);

       // this.filteredServList = this.myControl.valueChanges
       // console.log(this.filteredServList);

        /*
            .pipe(
              startWith(''),
              map(value => typeof value === 'string' ? value : value.name),
              map(name => name ? this.__filter(name) : this.servicios.slice())
            );  */


      }, (error: HttpErrorResponse) => {
         // this.spinnerService.hide();
         console.log(error);


      }
    );

  }

  selectCertifiedYear(document): any {

    console.log("entro 2");

   // this.spinnerService.show();
    this.datos.year = document.year;

    this.generateCertificate.listMonths(this.datos).subscribe(
      (data) => {
      //  this.spinnerService.hide();
        // this.certifiedPeriod = true;
        this.certifiedPeriodicity = true;
        console.log(data);
        this.period = data;

      /*  this.filteredPeriod = this.myControl.valueChanges
            .pipe(
              startWith(''),
              map(value => typeof value === 'string' ? value : value.name),
              map(name => name ? this.__filter(name) : this.period.slice())
            );  */


      }, (error: HttpErrorResponse) => {
         console.log(error);


      }
    );
  }


  onSubmit(): void {

   // if (this.resolvePassword.valid) {

      this.downloadPDF();

   //  }

  }

  SelectCertifiedPeriodicity(certifiedPeriodicityValue) {

      this.certifiedPeriod = true;
  }


  // tslint:disable-next-line:typedef
  downloadPDF() {
    /* const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    doc.text('Hello world!', 10, 10);
    doc.save('hello-world.pdf');

    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_tutorial.pdf`);
    });  */


    //this.spinnerService.show();

    /*
    var logo = new Image();
    logo.src = './assets/images/fsfb.png';

    let doc = new jsPDF;
    //doc.addImage(logo, 'JPEG', 10, 5, 50, 20);
    doc.setFont('helvetica', "bold");
    doc.setFontSize(10);
    doc.text( 'Certificado de Retención en la fuente por IVA', 68, 30);
    doc.text('Año garvable', 95, 35);
    doc.text('FUNDACIÓN SANTA FE DE BOGOTÁ', 75, 40);
    doc.text('NIT: 860037950 - 2', 92, 45);
    doc.text('CALLE 119 No. 7 - 75 TELEFONO 6030303', 72, 50);
    doc.text('BOGOTÁ D.C - COLOMBIA', 85, 55);

    doc.text('CERTIFICA', 96, 70);
    doc.setFont('helvetica');
    doc.setFontSize(10);
    doc.text(`Que durante el periodo comprendido entre 01/01/2019 y 31/12/2019 en la ciudad de BOGOTA D.C se práctico`, 20, 75);
    doc.text(`y consignó retención en la fuente Título de Renta a:`, 20, 80 );

    doc.setFont('helvetica', "bold");
    doc.setFontSize(10);
    doc.text('INGENIERIA CLINICA A SU SERVICIO INCLISER LTDA', 62, 95);
    doc.text('9001800693', 97, 100);

    doc.text('PERIODO', 30, 115);
    doc.text('CONCEPTO', 60, 115);
    doc.text('BASE', 110, 115);
    doc.text('PORCENTAJE', 130, 115);
    doc.text('RETENCIÓN', 170, 115);

    //  Porcentajes PDF
    doc.setFont('helvetica', "bold");
    doc.setFontSize(10);



    doc.setFont('helvetica', "bold");
    doc.setFontSize(10);
    doc.text('VALOR RETENIDO:', 20, 160);
    doc.text('SEISCIENTOS CINCUENTA Y TRES MIL TRESCIENTOS SETENTA Y CINCO', 20, 165);
    doc.setFont('helvetica');
    doc.setFontSize(7);
    doc.text('LA BASE DE RETENCIÓN EN LA FUENTE, CORRESPONDE AL 100% DE SUS INGRESOS MENOS LAS DEDUCCIONES DE LEY SEGÚN EL ARTÍCULO', 20, 175);
    doc.text('126 DEL ESTATUTO TRIBUTARIO (AFC, APORTES OBLIGATORIOS Y/O VOLUNTARIOS DE PENSIÓN), EN CASO DE TENERLOS.', 20, 180);

    doc.setFont('helvetica', "bold");
    doc.setFontSize(10);
    doc.text('FUNDACION SANTA FE DE BOGOTA', 20, 200,);
    doc.text('NIT: 860037950-2', 20, 205);
    doc.text('FECHA DE EXPEDICION 05/03/2020', 20, 210);

    doc.setFont('helvetica');
    doc.setFontSize(7);
    doc.text('NOTA: LAS PERSONAS JURIDICAS PODRAN ENTREGAR LOS CERTIFICADOS DE RETENCION EN LA FUENTE, EN FORMA CONTINUA IMPRESA', 20, 220);
    doc.text('POR COMPUTADOR, SIN NECESIDAD DE FIRMA AUTOGRAFA (D.R. 836/91)LOS DOCUMENTOS QUE SE ENCUENTRAN ALMACENADOS EN', 20, 225);
    doc.text('MEDIOS MAGNÉTICOS O ELECTRÓNICOS PUEDAN SER IMPRESOS EN CUALQUIER PARTE UTILIZANDO EL COMPUTADOR, YA SEA EN LA SEDE', 20, 230);
    doc.text('DEL AGENTE DE RETENCIÓN O EN LA SEDE DEL RETENIDO (CONCEPTO DIAN 105489 DE 24-12-2007).LA UTILIZACION DE ESTE CERTIFICADO', 20, 235);
    doc.text('EN LAS DECLARACIONES TRIBUTARIAS QUE SE SURTAN ANTE LAS AUTORIDADES COMPETENTES ES RESPONSABILIDAD EXCLUSIVA DE LA(S)', 20, 240);
    doc.text('PERSONA(S) EN CUYO FAVOR SE EXPIDE.', 20, 245);


    doc.setFont('helvetica');
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 255);
    doc.text('Calle 119 No. 7–75 Teléfono: 6030303 Fax: 6575714 Bogotá, D.C', 50, 260);
    doc.text('www.fsfb.org.co', 90, 265);



    doc.save('hello-world.pdf');

    setTimeout(() => {
     // this.spinnerService.hide();
    }, 8000);

      */


 // PdfMakeWrapper.setFonts(pdfFonts);

  //   const def = { content: 'A sample PDF document generated using Angular and PDFMake' };
  //   pdfMake.createPdf(def).download();

  /*
  const pdf = new PdfMakeWrapper();

  pdf.add('Hello world!');

  pdf.create().download();
 */


  }


  close(): void {


  }




  private _filter(name: string): any {
    const filterValue = name.toLowerCase();

    return this.servicios.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  private __filter(name: string): any {
    const filterValue = name.toLowerCase();

    return this.servicios.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }



  displayFn(item) {
    return item ? item.descripcion : undefined;
  }




  selectCertifiedPeriod(document): any {

    //this.spinnerService.show();

    this.certifiedMunicipality = true;
    this.datos.monthOne = document.periodo;

    console.log("Test 2", this.datos);


    if (document.periodo === 'ENERO') {

    this.datos.monthTwo = 'FEBRERO';

    } else if(document.periodo === 'MARZO')  {

    this.datos.monthTwo = 'ABRIL';

    } else if(document.periodo === 'MAYO')  {

    this.datos.monthTwo = 'JUNIO';

    }else if(document.periodo === 'JULIO')  {

    this.datos.monthTwo = 'AGOSTO';

    }else if(document.periodo === 'SEPTIEMBRE')  {

    this.datos.monthTwo = 'OCTUBRE';

    }else if(document.periodo === 'NOVIEMBRE')  {

    this.datos.monthTwo = 'DICIEMBRE';

    }

    console.log("Test 3", this.datos);

  }


  selectCertifiedMunicipality(document): any {

    this.datos.crMunicipio = document;
    console.log(this.datos);
    // this.spinnerService.show();

    this.generateCertificate.generateCertificate(this.datos).subscribe(
      (data) => {
       // this.spinnerService.hide();
        console.log(data);
        this.dataListCertificate = data;
        console.log(this.dataListCertificate);


      }, (error: HttpErrorResponse) => {
         console.log(error);

         /*
         swal({
          title: 'Error',
          text: 'El usuario no tiene ningún certificado.',
          icon: 'error',
        });  */
      }
    );

  }


}

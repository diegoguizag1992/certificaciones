import { CrearproveedorService } from './../../../service/proveedor/crearproveedor.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import swal from 'sweetalert';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-crearproveedores',
  templateUrl: './crearproveedores.component.html',
  styleUrls: ['./crearproveedores.component.less']
})
export class CrearproveedoresComponent implements OnInit {


  legalPerson: FormGroup;
  naturalPerson: FormGroup;
  numeroPolizaReadonly = false;

  form_fsfb = true;
  legalPersonform = false;

  defaultElevation = 2;
  raisedElevation = 8;
  selected = '1';
  document = 'Seleccione';
  documento = true;
  somePlaceholder = 'Documento';
  dataPersonaNatural: any = {};
  date = new Date();


  constructor(private fb: FormBuilder,
              private ordenService: CrearproveedorService
              ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {


    this.filterCambioCitas();
    this.naturalPersonFilter();

  }

   filterCambioCitas(): void {

    this.legalPerson = this.fb.group({

      userProviderNit: [''],
      userProviderName: [' '],
      userProviderLastname: [' '],
      userProviderEmail: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      userProviderEmailApprover: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      userProviderNameCompany: ['', [Validators.required]],
      userProviderDateCreated: [' '],
      documentType: ['', [Validators.required]],
      userproviderType: ['', [Validators.required]],
      providertypeId: ['2'],
      accountinguserId: ['2'],


    });

  }

  naturalPersonFilter(): void{

    this.naturalPerson = this.fb.group({
      userProviderNit: [''],
      userProviderName: [null, [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/), Validators.minLength(3)]],
      userProviderLastname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/), Validators.minLength(3)]],
      userProviderEmail: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      userProviderEmailApprover: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      userProviderNameCompany: [' '],
      userProviderDateCreated: [''],
      documentType: ['', [Validators.required]],
      userproviderType: ['', [Validators.required]],
      providertypeId: ['1'],
      accountinguserId: ['2', ],
    });

  }


  onSubmitLegalPerson(): void{


    this.dataPersonaNatural.datosPJId = "0";
    this.dataPersonaNatural.datosPJFecha = this.date;
    this.dataPersonaNatural.datosPJTipoIdent = this.legalPerson.value.documentType;
    this.dataPersonaNatural.datosPJResidente = "";
    this.dataPersonaNatural.datosPJIdentificacion = this.legalPerson.value.userProviderNit;
    this.dataPersonaNatural.datosPJDigitoVerifica = 0;
    this.dataPersonaNatural.datosPJRazonSocial = this.legalPerson.value.userProviderNameCompany;
    this.dataPersonaNatural.datosPJTelefono = '';
    this.dataPersonaNatural.datosPJDireccion = '';
    this.dataPersonaNatural.datosPJEmail = this.legalPerson.value.userProviderEmail;
    this.dataPersonaNatural.datosPJNomRepresent = '';
    this.dataPersonaNatural.datosPJIdentRepresent = ''
    this.dataPersonaNatural.datosPJTeleRepresent = '';
    this.dataPersonaNatural.datosPJEmailRepresent = this.legalPerson.value.userProviderEmailApprover;
    this.dataPersonaNatural.datosPJOperacionesInter = '';
    this.dataPersonaNatural.datosPJTipoContribuyente = '';
    this.dataPersonaNatural.datosPJTipoOperacionInt = '';
    this.dataPersonaNatural.datosPJRecursosPublicos = '';
    this.dataPersonaNatural.datosPJActEcoNro = '';
    this.dataPersonaNatural.datosPJActEcoTarifa = '';
    this.dataPersonaNatural.datosPJNombreBanco = '';
    this.dataPersonaNatural.datosPJNroCuenta = '';
    this.dataPersonaNatural.datosPJModalidad = '';
    this.dataPersonaNatural.datosPJCodigoAbaSwift = '';
    this.dataPersonaNatural.datosPJPersonaPublica = '';
    this.dataPersonaNatural.datosPJTratamiento = '';
    this.dataPersonaNatural.datosPJCiudad = '';
    this.dataPersonaNatural.datosPJPais = '';
    this.dataPersonaNatural.datosPJPaisBanco = '';



    if (this.legalPerson){


      this.ordenService.crearLegalPerson(this.dataPersonaNatural).subscribe(
        (data) => {

          swal({
            title: '',
            text: 'Registro realizado correctamente.',
            icon: 'success',
          });

        }, (error: HttpErrorResponse) => {

          console.log(error);

          if (error.status ===  200 || error.status ===  201 || error.status ===  202 ) {

          swal({
             title: '',
             text: 'Registro realizado correctamente.',
             icon: 'success',
           });

           setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.naturalPerson.reset();
            window.location.reload();

          }, 6000);

         } else {

           swal({
             title: '',
             text: 'Comuniquese con el administrador',
             icon: 'error',
           });

           setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.naturalPerson.reset();
            window.location.reload();

          }, 6000);


         }
        }
      );

    } else {

      swal({
        title: 'Good job!',
        text: 'You clicked the button!',
        icon: 'error',
      });

    }

  }

  onSubmit(): void{


    if ( this.naturalPerson ) {

      this.dataPersonaNatural.datosPNId = "0";
      this.dataPersonaNatural.datosPNFecha = this.date;
      this.dataPersonaNatural.datosPNTipoIdentifica = this.naturalPerson.value.documentType;
      this.dataPersonaNatural.datosPNResidente = "";
      this.dataPersonaNatural.datosPNIdentificacion = this.naturalPerson.value.userProviderNit;
      this.dataPersonaNatural.datosPNApellidosNombres = `${this.naturalPerson.value.userProviderLastname} ${this.naturalPerson.value.userProviderName}`;
      this.dataPersonaNatural.datosPNDireccion = '';
      this.dataPersonaNatural.datosPNOcupacion = '';
      this.dataPersonaNatural.datosPNTelefono = '';
      this.dataPersonaNatural.datosPNLugarNacimiento = '';
      this.dataPersonaNatural.datosPNFechaNacimiento = '1900-01-01';
      this.dataPersonaNatural.datosPNEmail = this.naturalPerson.value.userProviderEmail;
      this.dataPersonaNatural.datosPNOperacionesInter = '';
      this.dataPersonaNatural.datosPNTipoOperacionInt = '';
      this.dataPersonaNatural.datosPNRecursosPublicos = '';
      this.dataPersonaNatural.datosPNResponsIVA = '';
      this.dataPersonaNatural.datosPNNroICA = '';
      this.dataPersonaNatural.datosPNRST = '';
      this.dataPersonaNatural.datosPNNombreBanco = '';
      this.dataPersonaNatural.datosPNNroCuenta = '';
      this.dataPersonaNatural.datosPNModalidad = '';
      this.dataPersonaNatural.datosPNPaisBanco = '';
      this.dataPersonaNatural.datosPNCodigoAbaSwift = '';
      this.dataPersonaNatural.datosPNPersonaPublica = '';
      this.dataPersonaNatural.datosPNTratamiento = '';
      this.dataPersonaNatural.datosPNDeclOrigenFondo = '';

      console.log(this.dataPersonaNatural);

      this.ordenService.crearNaturalPerson(this.dataPersonaNatural).subscribe(
        (data) => {


        }, (error: HttpErrorResponse) => {
           console.log(error);

           if (error.status ===  200 || error.status ===  201 || error.status ===  202 ) {


           swal({
              title: '',
              text: 'Registro realizado correctamente.',
              icon: 'success',
            });

            setTimeout(() => {
              /** spinner ends after 5 seconds */
              alert()
              //this.naturalPerson.reset();
             // window.location.reload();

            }, 6000);

          } else {

            swal({
              title: '',
              text: 'Comuniquese con el administrador',
              icon: 'error',
            });

            setTimeout(() => {
              /** spinner ends after 5 seconds */
              // this.naturalPerson.reset();
              // window.location.reload();

            }, 6000);

          }
        }
      );

    } else {

      swal({
        title: '',
        text: 'Verifique los datos ingresados',
        icon: 'error',
      });
    }

  }


  close(): void{

    window.location.href='/wps/portal/terceros/inicio';

  }


  select(tipoTercero: string): void{

    if (tipoTercero === '1') {
      this.legalPersonform = false;
      this.form_fsfb = true;
      this.naturalPerson.reset();
      this.legalPerson.reset();
      this.somePlaceholder = 'Documento';

    } else {
      this.form_fsfb = false;
      this.legalPersonform = true;
      this.naturalPerson.reset();
      this.legalPerson.reset();
      this.somePlaceholder = 'Documento';

    }

  }

  selectDocument(document: string) {

    if (document === 'Otro') {

      this.somePlaceholder = 'Otro';
      this.legalPerson.controls.userProviderNit.setValidators(null);
      this.naturalPerson.controls.userProviderNit.setValidators(null);

    } else {

      this.legalPerson.controls.userProviderNit.setValidators([Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]);
      this.naturalPerson.controls.userProviderNit.setValidators([Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]);

    }

  }

}

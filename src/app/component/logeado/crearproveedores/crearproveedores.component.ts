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

    if (this.legalPerson){


      this.ordenService.crearLegalPerson(this.legalPerson.value).subscribe(
        (data) => {

          swal({
            title: '',
            text: 'Registro realizado correctamente.',
            icon: 'success',
          });

        }, (error: HttpErrorResponse) => {

          console.log(error);

          if (error.status ===  201 ) {

          swal({
             title: '',
             text: 'Registro realizado correctamente.',
             icon: 'success',
           });

         } else {

           swal({
             title: '',
             text: 'Comuniquese con el administrador',
             icon: 'error',
           });
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

      this.ordenService.crearNaturalPerson(this.naturalPerson.value).subscribe(
        (data) => {


        }, (error: HttpErrorResponse) => {
           console.log(error);

           if (error.status ===  201 ) {


           swal({
              title: '',
              text: 'Registro realizado correctamente.',
              icon: 'success',
            });

          } else {

            swal({
              title: '',
              text: 'Comuniquese con el administrador',
              icon: 'error',
            });

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

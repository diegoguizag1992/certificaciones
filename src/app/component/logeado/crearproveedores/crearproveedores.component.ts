import { CrearproveedorService } from './../../../service/proveedor/crearproveedor.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import swal from 'sweetalert';



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

      tipoTercero: ['Persona Juridica'],
      razonSocial: [null, [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/), Validators.minLength(4)]],
      correoAprobador: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      tipoDocumento: ['', [Validators.required]],
      documento: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]],
      tipoProveedor: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
    });

  }

  naturalPersonFilter(): void{

    this.naturalPerson = this.fb.group({
      userProviderNit: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]],
      userProviderName: [null, [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/), Validators.minLength(3)]],
      userProviderLastname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/), Validators.minLength(3)]],
      userProviderEmail: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      userProviderEmailApprover: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      userProviderNameCompany: [' '],
      userProviderDateCreated: ['19/11/2020'],
      userproviderType: ['', [Validators.required]],
      providertypeId: ['1'],
      accountinguserId: ['', [Validators.required]],
    });

  }


  onSubmitLegalPerson(): void{

    if (this.legalPerson){

      console.log(this.legalPerson.value);
      console.log(this.naturalPerson.value);

      this.ordenService.crearLegalPerson(this.legalPerson.value).subscribe(
        (data) => {

          swal({
            title: '',
            text: 'Registro realizado correctamente.',
            icon: 'success',
          });

        }, (error) => {
           console.log(error);
           swal({
            title: '',
            text: 'Nit de usuario incorrecto',
            icon: 'error',
          });

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

          swal({
            title: '',
            text: 'Registro realizado correctamente.',
            icon: 'success',
          });

        }, (error) => {
           console.log(error);
           swal({
            title: '',
            text: 'Nit de usuario incorrecto',
            icon: 'error',
          });

        }
      )

    } else {

      console.log(this.legalPerson.value);
      console.log(this.naturalPerson.value);

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

  selectDocument(document: string): void {

    if (document === 'Otro') {

      this.somePlaceholder = 'Otro';
      this.legalPerson.controls.documento.setValidators(null);
      this.naturalPerson.controls.documento.setValidators(null);

    } else {

      this.legalPerson.controls.documento.setValidators([Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]);
      this.naturalPerson.controls.documento.setValidators([Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]);

    }

  }

}

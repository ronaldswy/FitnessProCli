import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form-components',
  templateUrl: './form-components.component.html',
  styleUrls: ['./form-components.component.scss'],
})

export class FormComponentsComponent implements OnInit {
  //ARREGLO PARA GUARDAR EN LA BD
  planArray: any[] = [];
  currentPlanID = "";

  nombres_completos: string = "";
  cedula: string = "";
  correo: string = "";
  telefono: string = "";
  ocupacion: string = "";
  genero: string = "";
  plan: string = "";

  form: FormGroup;
  captcha: string;
  email: string;
  http: any;
  title = 'recaptcha';
  submitted = false;
  public siteKey: any;
  @Input('ngModelOptions')
  options: {
    name?: string;
    standalone?: boolean;
    updateOn?: FormBuilder;
  }

  //usando formbuilder
  constructor(private formBuilder: FormBuilder, private http2: HttpClient) {
    //se hace aqui para instancia directa
    this.buildForm();
    this.getAllStudent();
  }

  getAllStudent() {

    this.http2.get("http://127.0.0.1:8000/plan/getAll")
      .subscribe((resultData: any) => {

        console.log(resultData);
        this.planArray = resultData.data;

      });


  }

  ngOnInit(): void {
  }

  //funcion privada
  private buildForm() {
    //enviar campo con las validaciones
    this.form = this.formBuilder.group({
      nameCtrl: new FormControl('', [Validators.required]),
      emailCtrl: new FormControl('', [Validators.required, Validators.email]),
      categoryCtrl: new FormControl('', [Validators.required]),
      cedulaCtrl: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]\d{6,10}$/), Validators.maxLength(10), Validators.minLength(6)]),
      telCrl: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]\d{6,10}$/), Validators.maxLength(9), Validators.minLength(8)]),
      genderCtrl: new FormControl('', [Validators.required]),
      terminosCtrl: new FormControl('', [Validators.required]),
      recaptcha: new FormControl('', [Validators.required]),
      planCtrl: new FormControl('', [Validators.required]),
    });
    this.siteKey = "6Le4Wj8jAAAAAJlyo46G4Pp1K5iLPrZeiga6xR6E"
  }

  //para enviar el formulario
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value; //json  se consigue del formulario
      console.log(value);

      if (this.currentPlanID == '') {
        this.register();
      }
      else {
        //this.UpdateRecords();
      }

      /* alert('Mensaje Enviado !' + JSON.stringify(this.form.getRawValue())) */
    } else {
      this.form.markAllAsTouched(); //utilizado en algun momento maneja el evento
    }
  }


  //VALIDACIONES
  get nameField() {
    return this.form.get('nameCtrl');
  }
  get planField() {
    return this.form.get('planCtrl');
  }
  get cedulaField() {
    return this.form.get('cedulaCtrl');
  }
  get telField() {
    return this.form.get('telCrl');
  }
  get emailField() {
    return this.form.get('emailCtrl');
  }
  get categoryField() {
    return this.form.get('categoryCtrl');
  }
  get genderField() {
    return this.form.get('genderCtrl');
  }
  get termField() {
    return this.form.get('terminosCtrl');
  }
  get captchaField() {
    return this.form.get('captchaCtrl');
  }



  register() {

    let bodyData = {
      "nombres_completos": this.nombres_completos,
      "cedula": this.cedula,
      "correo": this.correo,
      "telefono": this.telefono,
      "ocupacion": this.ocupacion,
      "genero": this.genero,
      "plan": this.plan,
    };

    this.http2.post("http://127.0.0.1:8000/plan/create", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Se ha registrado correctamente")
      //this.getAllEmployee();
      this.nombres_completos = '';
      this.cedula = '';
      this.correo = '';
      this.telefono = '';
      this.ocupacion = '';
      this.genero = '';
      this.plan = '';
      this.getAllStudent();
    });
  }

}

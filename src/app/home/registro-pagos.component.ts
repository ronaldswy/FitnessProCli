import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes, Route, ROUTES } from '@angular/router';
@Component({
  selector: 'app-registro-pagos',
  templateUrl: './registro-pagos.component.html',
  styleUrls: ['./registro-pagos.component.scss']
})
export class RegistroPagosComponent implements OnInit {
  cedula!: string;
  StudentArray: any[] = [];
  currentStudentID = "";
  estado_pago: "";
  nombres_completos: "";
  constructor(private http: HttpClient) {
    this.getAllStudent();
  }

  ngOnInit(): void {
  }

  getAllStudent() {
    this.http.get("http://127.0.0.1:8000/plan/getAll")
      .subscribe((resultData: any) => {
        console.log(resultData);
        this.StudentArray = resultData.data;
      });
  }

  setUpdate(data: any) {

    this.estado_pago = data.estado_pago;
    this.cedula = data.cedula;
    this.nombres_completos = data.nombres_completos;

    this.currentStudentID = data._id;

  }

  //ACTUALIZAR ESTADO 
  UpdateRecords() {
    let bodyData = {
      "cedula": this.cedula,
      "estado_pago": this.estado_pago,
      "nombres_completos": this.nombres_completos
    };

    this.http.patch("http://127.0.0.1:8000/plan/update" + "/" + this.currentStudentID, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Estado actualizado")
    });
  }

  save() {
    this.UpdateRecords();
    setTimeout(() => {
      location.reload();
    }, 4000);
  }

}

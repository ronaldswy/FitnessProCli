import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {
  cedula!: string;
  StudentArray: any[] = [];
  currentStudentID = "";

  selectedFile: any = null;

  constructor(private http: HttpClient, private router: Router, private imageService: ImageService) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  navegar() {
    this.router.navigate(['/fileupload'])
  }

  uploadImage(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result !== null) {
        const foto = reader.result.toString();
        const cedula = this.cedula;
        console.log(cedula);

        this.imageService.uploadImage(cedula, foto).subscribe(res => {
          alert("Comprobante ingresado correctamente");
        },
          (err) => console.log(err)
        );
      } else {
        alert("Error, intentelo de nuevo");
        console.log("Error al procesar la imagen")
      }
    };
  }

}

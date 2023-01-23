import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  uploadImage(cedula: string, foto: string) {
    return this.http.put('http://127.0.0.1:8000/' + cedula, { foto }!);
  }
}

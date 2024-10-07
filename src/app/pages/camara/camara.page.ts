import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {
  imagen: any;

  constructor() { }

  ngOnInit() {
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,  //va en rango de 0 a 100 especifica la calidad de la fotografia (varia segun el dispositivo)
      allowEditing: false, // permte editar la fotografia (true si pemite /// false no permite)
      resultType: CameraResultType.Uri // formato de la foto (si no funciona avisar al profe)
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    this.imagen = image.webPath; //se guarda la foto en MI VARIABLE mediante web (en este caso imagen)
    //para guardar la foto el formato en la base de datos debe quedar con blob 


  };
}

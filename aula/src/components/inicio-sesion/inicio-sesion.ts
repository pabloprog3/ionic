import { Component } from '@angular/core';
import {AlertController, NavController, Platform} from 'ionic-angular';



@Component({
  selector: 'inicio-sesion',
  templateUrl: 'inicio-sesion.html'
})
export class InicioSesionComponent {

  private nombre: string = "";
  private correo: string = "";
  private passw1: any;
  private passw2: any = null;
  private enPassw: boolean = true;
  private OkError: string = "";
  private textoOkError: string = "";
  private mostrarTextoInf: boolean = false;
  private iconOkErr: string = "";
  private rSexo: string = "";
  private rPerfil: string = "";
  private enableConfirmUser: boolean = true;

  constructor(public alertCtrl:AlertController) {

  }

  private confirmPassw():void{
      if (this.passw1 != null && this.passw1 != "") {
        this.enPassw = false;
      } else {
        this.enPassw = true;
        if (this.passw1 == "") {
          this.passw2 = null;
        }

      }
  }

  private textoInf():void{
    if(this.passw1 != "" && this.passw2 != ""){
      this.mostrarTextoInf = true;
      if(this.passw1 != this.passw2){
        this.OkError="danger";
        this.textoOkError="Las claves no coinciden";
        this.iconOkErr = "close";
      }else{
        this.OkError="secondary";
        this.textoOkError="Las claves coinciden";
        this.iconOkErr = "checkmark";
        this.enableConfirmUser = false;
      }
    }else{
      this.mostrarTextoInf = false;
    }

  }

  private registrarseFirebase():void{
    this.configAlertas();
  }

  private cancelarRegistro():void{
    this.nombre = "";
    this.passw1 ="";
    this.rPerfil = "";
    this.rSexo = "";
    this.correo = "";
  }

  private configAlertas():void{
    if (this.nombre == "") {
      let alert = this.alertCtrl.create({
        title: '¡Faltan Datos!',
        inputs: [
          {
            name: 'nombre',
            placeholder: 'Nombre de usuario'
          }
        ],
        buttons: [
          {
            text: 'Confirmar',
            handler: data =>{
              if (data != "") {
                this.nombre = data['nombre'];
              }
            }
          }
        ]
      });
      alert.present();
    }

    if (this.rPerfil == "") {
      let alert = this.alertCtrl.create({
        subTitle: 'Falta dato!',
        message:  'Seleccione el perfil del usuario.',
        inputs: [
          {
            name: 'rPerfil',
            label: 'Administrador',
            type: "radio",
            value: "admin",
            checked: false
          },
          {
            name: 'rPerfil',
            label: 'Usuario',
            type: "radio",
            value: "usuario",
            checked: false
          },
          {
            name: 'rPerfil',
            label: 'Invitado',
            type: "radio",
            value: "invitado",
            checked: false
          },
          {
            name: 'rPerfil',
            label: 'Jugador',
            type: "radio",
            value: "jugador",
            checked: false
          }
        ],
        buttons: [
          {
            text: 'Aceptar',
            handler: data=>this.rPerfil=data
          }
        ]

      });
      alert.present();
    }

    if (this.rSexo=="") {
      let alert = this.alertCtrl.create({
        subTitle: 'Falta dato!',
        message:  'Seleccione el perfil del usuario.',
        inputs: [
          {
            name: 'rSexo',
            label: 'Masculino',
            type: "radio",
            value: "Male",
            checked: false
          },
          {
            name: 'rSexo',
            label: 'Femenino',
            type: "radio",
            value: "Female",
            checked: false
          }
        ],
        buttons: [
          {
            text: 'Aceptar',
            handler: data=>this.rSexo=data
          }
        ]

      });
      alert.present();
    }

    if (this.correo == "") {
      let alert = this.alertCtrl.create({
        title: '¡Faltan Datos!',
        inputs: [
          {
            name: 'correo',
            placeholder: 'Correo'
          }
        ],
        buttons: [
          {
            text: 'Confirmar',
            handler: data =>{
              if (data != "") {
                this.correo = data['correo'];
              }
            }
          }
        ]
      });
      alert.present();
    }
  }

}//fin clase
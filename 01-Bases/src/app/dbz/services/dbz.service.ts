import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService{

  // ATRIBUTOS
  private _personajes: Personaje[] = [

    {
      nombre: "Goku",
      poder: 12000
    }

  ];


  // GETERS Y SETERS
  get  personajes():Personaje[]{
    return [...this._personajes]
  }

  // CONSTRUCTOR
  constructor(){
      console.log("Servicio inicializado")
  }

  // Metodo para añadir personajes
  agregarPersonaje(personajes: Personaje){
    this._personajes.push(personajes);
  }


}

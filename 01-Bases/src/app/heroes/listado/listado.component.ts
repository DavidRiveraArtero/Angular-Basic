import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[] = ['Spiderman','Ironman','Hulk']
  lastHero:string[] = []
  
  borrarHeroe(){
    if(this.heroes.length > 0){
      this.lastHero.push(this.heroes[this.heroes.length-1])
    }

    this.heroes.pop()
  }




}

import { Component } from '@angular/core';
import { Employe } from '../employe';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  nouvelEmploye = new Employe(0, '', new Date(),0)
  added = false
  
  ajouter(){
    console.log(this.nouvelEmploye)
    this.added = true
  }
}

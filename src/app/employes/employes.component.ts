import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Employe } from '../employe';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent {

  //source de données
  employes:Employe[] = []

  constructor(private data: DataService){

  }

  ngOnInit(){
      //initialisation de la source de données
      this.employes = this.data.getEmployes()

      // this.employes.push(new Employe(1, "Alex Lajoie", new Date(2001, 0, 5), 36000))
      // this.employes.push(new Employe(2, "Annie Liam", new Date(2002, 2, 15), 40000))
      // this.employes.push(new Employe(3, "Simon Lemay", new Date(2002, 11, 1), 40000))
      // this.employes.push(new Employe(4, "David Dupont", new Date(2005, 8, 26), 41000))
  }
}

import { Injectable } from '@angular/core';
import { Employe } from './employe';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  employes: Employe[] = []

  constructor() {
    fetch('assets/employes.json')
      .then(resp => { return resp.json() })
      .then(data => {
        console.log("Il y a " + data.employes.length + " entrées dans le fichier JSON")
        for (let index = 0; index < data.employes.length; index++) {
          let id = data.employes[index].id
          let nom = data.employes[index].nom
          let anneeEmbauche = (data.employes[index].dateEmbauche).substring(0, 4)
          let moisEmbauche = (data.employes[index].dateEmbauche).substring(5, 7)
          let jourEmbauche = (data.employes[index].dateEmbauche).substring(8)
          let dateEmbauche = new Date(anneeEmbauche, moisEmbauche - 1, jourEmbauche)
          let salaire = data.employes[index].salaire

          this.employes.push(new Employe(id, nom, dateEmbauche, salaire))
        }
      })
  }


  getNames(): string[] {
    return ["Alain", "Sam", "Alex"]
  }

  getEmployes(): Employe[] {
    return this.employes
  }

}

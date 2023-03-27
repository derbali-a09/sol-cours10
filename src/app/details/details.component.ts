import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Employe } from '../employe';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  //source de données
  employes:Employe[] = []
  index:number = 0
  
  constructor(private route: ActivatedRoute, private data:DataService ){ //injection de dépendance d'un ojet de type ActivatedRoute
      let id = route.snapshot.paramMap.get('ref')
      console.log(id)
      if(id != null){
        this.index  = parseInt(id) - 1
      }
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

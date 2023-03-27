import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sol-cours09';
  names:string[]=[]

  constructor(private data: DataService){ //injection d'un service DataService
    this.names = this.data.getNames()
  }
}

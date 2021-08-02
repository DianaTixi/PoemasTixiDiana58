import { Component, OnInit } from '@angular/core';
import { Navigation, NavigationExtras, Router } from '@angular/router';
import { PeomasService } from 'src/app/services/peomas.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  constructor(private route: Router,
    private poemaService: PeomasService) { }
    poemas: any;


  ngOnInit() {
    this.poemas = this.poemaService.getPoemas();
  }

  editar(uid: string){
    let params: NavigationExtras = {
      queryParams:{
        uid: uid
      }
    }
    this.route.navigate(['crear'], params)

  }
  crear(){
    this.route.navigate(['login'])

  }
  
}

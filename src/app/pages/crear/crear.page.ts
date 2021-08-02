import { Component, OnInit } from '@angular/core';
import { PeomasService } from 'src/app/services/peomas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Poema } from 'src/app/domain/poema';

import { Navigation,} from '@angular/router';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  poema : Poema = new Poema();

  constructor(private route: ActivatedRoute,
    private poemaService: PeomasService) {
      
    route.queryParams.subscribe(params=>{
      console.log(params);
      
    })

   }

  ngOnInit() {
    

  }

  guardar(){
    console.log(this.poema);
    this.poemaService.save(this.poema)
  }

  
 
} 
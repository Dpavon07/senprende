import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PruebaService } from '../services/prueba.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { Location } from '@angular/common';

@Component({
  selector: 'app-posts-detail',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatInputModule,
    FormsModule,
    MatCardModule
  
  ],
  templateUrl: './posts-detail.component.html',
  styleUrl: './posts-detail.component.css'
})
export class PostsDetailComponent {
  id: any;
  public cuerpo : string;
  public titulo : string;
 public  idHead : number;
  routeSub: any;
 

  constructor(private route: ActivatedRoute, private services:PruebaService, private router: Router,  private location1: Location ) {
   this.cuerpo = ""
   this.titulo = ""
   this.idHead = 0
    }

    ngOnInit() {
      this.routeSub = this.route.params.subscribe(params => {
        this.id = params['id'];
        
      });

      this.getTipe();
}

getTipe() {
  this.services.GetType(this.id).subscribe( producto=>
    {
      this.cuerpo = producto.body;
      this.titulo = producto.title;
      this.idHead = this.id;
  });
  }

  back() {
    this.router.navigateByUrl('index');
  }
  goBack(): void {
    this.location1.back();
    
  }

}

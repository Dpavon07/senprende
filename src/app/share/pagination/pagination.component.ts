import { Component } from '@angular/core';



@Component({
  standalone : false,
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
 
})
export class PaginationComponent {
  public page: number;


   constructor() { 
    
    this.page = 0;
   
   }


}

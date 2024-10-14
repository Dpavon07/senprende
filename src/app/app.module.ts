import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule, } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { MatTable } from '@angular/material/table';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './share/pagination/pagination.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatTable,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: 'index', component: AppComponent},
      { path: 'postDetails/:id', component: PostsDetailComponent },
      {path: '', redirectTo: 'index', pathMatch: 'full'},
      
    ])
    
  ],
  exports: [
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatTable,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    
    
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

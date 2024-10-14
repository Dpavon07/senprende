import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'index/postDetails/:id', component: PostsDetailComponent },
  { path: 'index', component: AppComponent },
  {path: '', redirectTo: 'index', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 


}


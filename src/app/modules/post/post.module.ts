import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostsComponent} from "./components/posts/posts.component";
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import {PostComponent} from "./components/post/post.component";


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers:[

  ]
})
export class PostModule { }

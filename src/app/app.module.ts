import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {PostsComponent} from './components/posts/posts.component';
import {CommentsComponent} from './components/comments/comments.component';
import {HttpClientModule} from "@angular/common/http";
import {CommentComponent} from './components/comment/comment.component';
import {RouterModule, Routes} from "@angular/router";

import {PostComponent} from './components/post/post.component';
import {UserComponent} from './components/user/user.component';
import {MainLayoutComponent} from './components/layouts/main-layout/main-layout.component';
import {HeaaderComponent} from './components/header/heaader/heaader.component';
import * as path from "path";
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {PostDetailedComponent} from './components/post-detailed/post-detailed.component';

let routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'users', pathMatch: "full"},
      {
        path: 'users', component: UsersComponent, children: [
          {path: ':id', component: UserDetailsComponent}
        ]
      },
      {
        path: 'posts', component: PostsComponent, children: [
          {path: ':id', component: PostDetailedComponent}
        ]
      },
      {path: 'comments', component: CommentsComponent}
    ]
  },

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    UserComponent,
    PostComponent,
    CommentComponent,
    MainLayoutComponent,
    HeaaderComponent,
    UserDetailsComponent,
    PostDetailedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

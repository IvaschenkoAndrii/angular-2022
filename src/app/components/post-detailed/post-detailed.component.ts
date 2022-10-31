import { Component, OnInit } from '@angular/core';
import {IPost} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService, UserService} from "../../services";

@Component({
  selector: 'app-post-detailed',
  templateUrl: './post-detailed.component.html',
  styleUrls: ['./post-detailed.component.css']
})
export class PostDetailedComponent implements OnInit {

  post: IPost;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.post = this.router.getCurrentNavigation()?.extras.state?.['post'];

      if (!this.post) {
        postService.getPostById(id).subscribe(value => this.post = value);
      }

    })
  }

  ngOnInit(): void {
  }

}

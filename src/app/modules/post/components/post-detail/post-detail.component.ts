import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../../user/services";
import {IPost} from "../../interfaces";
import {PostService} from "../../services";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: IPost;
  constructor(private activatedRoute:ActivatedRoute, private postService:PostService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id})=>{
      this.postService.getByID(id).subscribe(value => this.post = value);
    })
  }

}

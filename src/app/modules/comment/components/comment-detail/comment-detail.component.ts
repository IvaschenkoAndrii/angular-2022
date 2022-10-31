import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IComment} from "../../interfaces";
import {CommentService} from "../../services";

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.css']
})
export class CommentDetailComponent implements OnInit {
  comment: IComment;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.comment = this.router.getCurrentNavigation()?.extras.state?.['comment'];

      // commentService.getById(id).subscribe(value => this.comment = value);


    })
  }

  ngOnInit(): void {

  }

}

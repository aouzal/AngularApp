import { PostService } from './../services/post.service';
import { Component, OnInit, } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any = [];
  post: any = {
    id: 0,
    title: "",
    body: "",
    userId: 0
  };
  status: boolean = true;
  constructor(private postService: PostService) {


  }

  createPost() {

    this.postService.create(this.post).subscribe(

      resp => {
        this.post = resp
        this.posts.unshift(this.post);
        this.init();
      },
    )
  }

  editPost(post) {
    this.post = post;
    this.status = false

  }
  deletePost(post) {
    this.postService.delete(2550).subscribe(
      res => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      }
    )
  }

  updatePost() {
    this.postService.update(this.post).subscribe(
      resp => this.init()
    )

    this.status = true
  }
  ngOnInit(): void {

    this.getPosts();
  }

  getPosts() {
    this.postService.getAll().subscribe(resp =>
      this.posts = resp
    )
  }
  init() {
    this.post = {
      id: 0,
      title: "",
      body: "",
      userId: 0
    };
  }

}

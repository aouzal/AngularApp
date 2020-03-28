import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
id:number=0;
page:number=0;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe(rout=>{
    //   this.id=+rout.get('id');
    // })

    this.id=+this.route.snapshot.paramMap.get('id');
  

    this.route.queryParamMap.subscribe(query=>{
      this.page=+query.get('page');
    })
  }

}

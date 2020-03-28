import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'faverite',
  templateUrl: './faverite.component.html',
  styleUrls: ['./faverite.component.css']
})
export class FaveriteComponent implements OnInit {


@Input('isFavorite') isSelected=false;
@Output('change') change=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onFav(){
    this.isSelected=!this.isSelected;
    let obj={
      isselected:this.isSelected
    }
    this.change.emit(obj);

}
}

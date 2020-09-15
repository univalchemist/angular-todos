import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() userId: number;
  @Output() goBack = new EventEmitter();
  todo: ToDo;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: any) {
    this.getDetail();
  }

  getDetail() {
    fetch(`https://jsonplaceholder.typicode.com/todos/${this.userId}`)
    .then(resp => resp.json())
    .then(res => {
      this.todo = res
    })
    .catch(e => console.log(e))
  }

}

interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
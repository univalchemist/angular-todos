import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  username: string = '';
  todos: ToDo[];
  userId: number;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.username = params.username
    })
    this.getTodos()
  }

  getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(resp => resp.json())
    .then(res => {
      this.todos = res
    })
    .catch(e => console.log(e))
  }

  onClick(todo: ToDo) {
    this.userId = todo.userId;
  }
  clear() {
    this.userId = null;
  }
}

interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
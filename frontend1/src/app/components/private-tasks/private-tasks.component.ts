import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/tasks.service'

@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.css']
})
export class PrivateTasksComponent implements OnInit {

  tasks = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getPrivateTasks()
      .subscribe(
        res => {
          console.log(res);
          this.tasks = res;
        },
        err => console.log(err)
      )
  }

}
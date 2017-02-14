import { Component } from '@angular/core';

import { Task } from './model/task';

@Component ({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']

})

export class AppComponent {
    private tasks = [
            new Task(
                "Buy a monkey",
                false
            ),
            new Task(
                "feed the baby",
                true
            ),
            new Task(
                "change diapers",
                false
)
        ];

    private currentTask = new Task(null,false);

    addTask(){
        let task = new Task(this.currentTask.content,this.currentTask.complete);
        this.tasks.push(task);
        this.currentTask.content = null;
    }
}
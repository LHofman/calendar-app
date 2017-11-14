import { GroupDataService } from './group/group-data.service';
import { CommentDataService } from './comment/comment-data.service';
import { CommentComponent } from './comment/comment/comment.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserComponent } from './user/user/user.component';
import { UserPageComponent } from './user/user-page/user-page.component';
import { RouterModule } from '@angular/router';
import { TaskDataService } from './task/task-data.service';
import { TaskResolver } from './task.resolver';
import {AccordionModule} from 'ngx-accordion';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { TaskPageComponent } from './task/task-page/task-page.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { TaskComponent } from './task/task/task.component';
import { NgModule } from '@angular/core';
import { AddCommentComponent } from './comment/add-comment/add-comment.component';
import { GroupComponent } from './group/group/group.component';
import { UserDataService } from './user/user-data.service';

const routes = [
    {path: 'task:taskId', component: TaskPageComponent, resolve: { task: TaskResolver}},
    {path: 'user/:userId', component: UserPageComponent}
];

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        ReactiveFormsModule, FormsModule,
        RouterModule.forChild(routes),
        AccordionModule
    ],
    declarations: [
        TaskComponent,
        AddTaskComponent,
        TaskPageComponent,
        UserComponent,
        AddUserComponent,
        UserPageComponent,
        CommentComponent,
        AddCommentComponent,
        GroupComponent
    ],
    exports: [
        TaskComponent,
        AddTaskComponent
    ],
    providers: [
        TaskDataService,
        UserDataService,
        CommentDataService,
        GroupDataService,
        TaskResolver
    ]
})
export class TaskModule {}
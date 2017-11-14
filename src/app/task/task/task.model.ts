import { Comment } from '../comment/comment.model';
import { Group } from '../group/group.model';
import {User} from '../user/user.model';
export class Task {

    public id: number;
    public title: string;
    public startTime: Date;
    public endTime: Date;
    public location: string;
    public users = new Array<User>();
    public groups = new Array<Group>();
    public comments = new Array<Comment>();

    static fromJSON(item) {
        return new Task(item._id, item.title, new Date(item.startTime), new Date(item.endTime), item.location);
    }

    constructor(id: number, title: string, startTime: Date, endTime: Date, location: string) {
        this.id = id;
        this.title = title;
        this.startTime = startTime;
        this.endTime = endTime;
        this.location = location;
    }

    toJSON() {
        return {
            title: this.title,
            startTime: this.startTime,
            endTime: this.endTime,
            location: this.location,
        };
    }

}
import {User} from "./User";

/** Chat room. */
export class ChatRoom {

    /** Feedback id. */
    public id: string;

    /** Feedback text. */
    public name : string;

    /** CreatedAt */
    public createdAt : string;

    /** Created by user. */
    public createdBy : User;

    /** Feedback model constructor.
     *
     * @param data Feedback instance data.
     * */
    constructor(data: ChatRoom) {
        this.id = data.id;
        this.name = data.name;
        this.createdAt = data.createdAt;
        this.createdBy = data.createdBy;
    }
}

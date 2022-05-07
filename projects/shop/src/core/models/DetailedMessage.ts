/** Send message. */
import {User} from "./User";

/** Detailed message. */
export class DetailedMessage {

    /** Message Id. */
    public id: string;

    /** Created by user. */
    public createdBy: User;

    /** Created at. */
    public createdAt : Date;

    /** Updated at. */
    public updatedAt : Date;

    /** Product id. */
    public text: string;

    /** Product image url. */
    public chatRoomId: string;

    /** Send message constructor.
     *
     * @param data Send message instance data.
     * */
    constructor(data: DetailedMessage) {
        this.id = data.id;
        this.text = data.text;
        this.chatRoomId = data.chatRoomId;
        this.createdAt = data.createdAt;
        this.createdBy = data.createdBy;
        this.updatedAt = data.updatedAt;
    }
}

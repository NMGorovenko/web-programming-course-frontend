/** Send message. */
export class SendMessage {

    /** Product id. */
    public text: string;

    /** Product image url. */
    public chatRoomId: string;

    /** Send message constructor.
     *
     * @param data Send message instance data.
     * */
    constructor(data: SendMessage) {
        this.text = data.text;
        this.chatRoomId = data.chatRoomId;
    }
}

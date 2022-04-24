import {User} from "./User";

/** Feedback model. */
export class Feedback {

    /** Feedback id. */
    public id: string;

    /** Feedback text. */
    public text : string;

    /** Feedback estimation. */
    public estimation : number;

    /** Feedback user. */
    public feedbackUser : User;

    /** Feedback created at. */
    public createdAt : Date;

    /** Feedback model constructor.
     *
     * @param data Feedback instance data.
     * */
    constructor(data: Feedback) {
        this.id = data.id;
        this.text = data.text;
        this.feedbackUser = data.feedbackUser;
        this.estimation = data.estimation;
        this.createdAt = data.createdAt;
    }
}
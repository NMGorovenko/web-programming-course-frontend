
/** User model. */
export class User {

    /** User id. */
    public id: string;

    /** User first name */
    public firstName : string;

    /** User model constructor.
     *
     * @param data User instance data.
     * */
    constructor(data: User) {
        this.id = data.id;
        this.firstName = data.firstName;
    }
}
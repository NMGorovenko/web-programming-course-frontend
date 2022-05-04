/** Product model. */
export class Product {

    /** Product id. */
    public id: string;

    /** Product title. */
    public title: string;

    /** Product image url. */
    public imageUrl: string;

    /** Product price. */
    public price: number;

    /** Product score. */
    public feedbackScore: number;

    /** Product max score. */
    public static maxScore = 5;

    /** Product model constructor.
     *
     * @param data Product instance data.
     * */
    constructor(data: Product) {
        this.id = data.id;
        this.title = data.title;
        this.imageUrl = data.imageUrl;
        this.price = data.price;
        this.feedbackScore = data.feedbackScore;
    }
}

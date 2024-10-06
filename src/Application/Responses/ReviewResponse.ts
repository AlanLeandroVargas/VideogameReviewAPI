class ReviewResponse{
    authorName: string;
    date: Date;
    comment: string;
    constructor(authorName: string, date: Date, comment: string){
        this.authorName = authorName;
        this.date = date;
        this.comment = comment;
    }
}
export default ReviewResponse
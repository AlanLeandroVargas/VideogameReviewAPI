class ReviewResponse{
    authorName: string;
    date: string;
    comment: string;
    constructor(authorName: string, date: string, comment: string){
        this.authorName = authorName;
        this.date = date;
        this.comment = comment;
    }
}
export default ReviewResponse
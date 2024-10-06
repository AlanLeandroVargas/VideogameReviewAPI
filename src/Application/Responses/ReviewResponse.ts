class ReviewResponse{
    authorName: string;
    date: string;
    comment: string;
    puntuation: number;
    constructor(authorName: string, date: string, comment: string, puntuation: number){
        this.authorName = authorName;
        this.date = date;
        this.comment = comment;
        this.puntuation = puntuation;
    }
}
export default ReviewResponse
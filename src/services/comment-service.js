export default class CommentService {
    _url = 'https://jsonplaceholder.typicode.com/comments?_limit=50';
    async getComments() {
        return (await fetch(this._url)).json()
    }
}

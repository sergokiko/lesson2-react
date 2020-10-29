export default class PostServise {
    _url = 'https://jsonplaceholder.typicode.com/posts?_limit=20';
    async getPosts() {
        return (await fetch(this._url)).json()
    }
}

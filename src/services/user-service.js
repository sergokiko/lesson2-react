export default class UserService {
    _url = 'https://jsonplaceholder.typicode.com/users';
    async getUsers() {
        return (await fetch(this._url)).json()
    }
 }

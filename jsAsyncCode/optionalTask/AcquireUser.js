export default class AcquireUser {
    constructor(id) {
        this._id = id;
    }

    async getData(url) {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            console.log(error);
        }
    }

    async getUserByID() {
        try {
            const res = await this.getData(`https://jsonplaceholder.typicode.com/users/${this._id}`);
            console.log(res);
        } catch (error) {
            console.log("Error", error);
        }
    }

}
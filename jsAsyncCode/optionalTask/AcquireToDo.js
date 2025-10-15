export default class AcquireToDo {
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

    async getToDoByID() {
        try {
            const res = await this.getData(`https://jsonplaceholder.typicode.com/todos/${this._id}`);
            console.log(res);
        } catch (error) {
            console.log("Error", error);
        }
    }

}
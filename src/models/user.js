class User {
    constructor(name, email, age, address, gender, image) {
        this.name = name
        this.email = email
        this.age = age
        this.address = address
        this.gender = gender
        this.image = image
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    getEmail() {
        return this.email
    }

    setEmail(email) {
        this.email = email
    }

    fromJSON(json) {
        this.name = json.name
        this.email = json.email
        this.age = json.age
        this.address = json.address
        this.image = json.image

        return this
    }

    toJSON() {
        return {
            name: this.name,
            email: this.email,
            age: this.age,
            address: this.address,
            image: this.image,
        }
    }

    keys() {
        return Object.keys(this.toJSON())
    }

    values() {
        return Object.values(this.toJSON())
    }

    // toString() {
    //     return `
    //         Name: ${this.name}
    //         Email: ${this.email}
    //         Age: ${this.age}
    //         Address: ${this.address
    //     `
    // }
}

export default User;

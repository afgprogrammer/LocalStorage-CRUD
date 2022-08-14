// as a user I should be able to register
// as a user I should be able to see the list of registered users
// as a user I should be able to edit a user
// as a user I should be able to remove a user

// as a user I should be able to filter user based on: [name, age, email, address]
// as a user I should be able to search in users: [name, email, address]
// as a user I should not be able to edit my email

// Ahad, Shahryar, Ali, ** Do not forget this Brain Storming **
// filter: based on name, email, address
// select box age: 0-15, 15-25, 25-35, ...
// filter tag: text, remove icon
/**
 * User edit form data should not reset after refreshing the page
 * User filter data should not reset or removed after page refresh
 * 
 * UX/UI
 * Clean coding
 * 
 * nice to have:
 * Alert notification: warning, success, danger
 */

/**
 * Register:
 *  name,
 *  email,
 *  age,
 *  image,
 *  address,
 *  gender // 0 Male 1 Female
 */

/**
 * User edit
 *  Email
 * 
 * 1. Find a user based on its email from localStorage
 * 2. Create a User object from it
 * 3. Add the user data to the form 
 * 4. Add a isEditing variable to the form
 * 5. Save the user data to localStorage
 * 
 */

/**
 * Search and Filter
 * 1. Add global input search box: name, email, address
 * 2. Add age filter select box
 * 
 * as a user I should be able to search and filter users
 * the filter data should not remove after page refresh
 */

import { saveUser, editUser, getUsers, getUserByEmail } from './utils/storage.js';
import User from './models/user.js';
import * as formState from './lib/form.js'
import * as badge from './lib/badge.js'
import * as url from './utils/url.js'

const table = document.getElementById("users-rows")
const form = document.getElementById("register")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = new FormData(form)
    let user = {
        name: formData.get('name'),
        email: formData.get('email'),
        age: formData.get('age'),
        address: formData.get('address'),
        image: formData.get('image'),
        gender: 0,
    }

    let userModel = new User()
        userModel.fromJSON(user)

    if (formData.get('isEditing') === "true") {
        editUser(userModel.email, userModel)
    } else {
        saveUser(user);
    }

    form.reset()
})

// Edit a user from user table
const editForm = (email) => {
    let user = getUserByEmail(email)
    let formData = new FormData(form)
        
    for (let key of formData.keys()) {    
        let input = document.getElementsByName(key)[0]
            input.value = user[key]
    }

    formState.isEditing("btn")
}

window.editForm = editForm

// Create user list
const users = getUsers();
if (users != null) {
    users.forEach((user) => {
        let trElement = document.createElement("tr")
            trElement.classList = 'border border-red-500'
        trElement.innerHTML = `
            <td class="col p-3">${user.name}</td>
            <td class="col p-3">${user.email}</td>
            <td class="col p-3">${user.age}</td>
            <td class="col p-3">${user.address}</td>
            <td class="col p-3">${user.gender == 0 ? 'Male' : "Female"}</td>
            <td class="col p-3"><a href="#" title="" onClick="editForm('${user.email}')">Edit</a></td>
        `
    
        table.appendChild(trElement)
    })
}


// Search and Filter
const filterForm = document.getElementById('filter-form')
filterForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const form = new FormData(filterForm)
    const search = form.get("search")
    const age = form.get("age")

    if (search != null || search.length > 0) {
        url.add("search", form.get("search"))
    }

    if (age != null) {
        url.add('age', age)
    }

    // badge.add('search', search)
    // badge.add('age', age)

    filterForm.reset()
})

const removeBadge = (key, text) => {
    badge.remove(text)
    url.remove(key, text)
}

window.removeBadge = removeBadge

window.onload = (event) => {
    const url = new URLSearchParams(window.location.search)

    if (url.has("search")) {
        const search = url.get("search").split(",")
    
        search.forEach((item) => {
            badge.add('search', item)
        })
    }

    if (url.has("age"))
        badge.add('age', url.get("age"))
}

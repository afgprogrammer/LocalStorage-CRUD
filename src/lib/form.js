const isEditing = (btnId) => {
    let input = document.getElementById('isEditing')
        input.value = "true"

    const btn = document.getElementById(btnId);
        btn.innerHTML = "Edit"
}
    
const isRegister = (btnId) => {
    const btn = document.getElementById(btnId);
        btn.innerHTML = "Register"
}

export {
    isEditing,
    isRegister
}

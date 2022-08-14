const add = (key, text) => {
    if (text === null || text.length <= 0)
        return;

    const badges = allBadges()
    const div = document.createElement("div")
        div.classList.add("badge")
        // div.setAttribute('id', text)

        div.innerHTML = `
            <span class="mr-3">${text}</span>
            <span class="cursor-pointer" onClick="removeBadge('${key}', '${text}')">X</span>
        `

    badges.appendChild(div)
    console.log(badges.children)
}

const remove = (text) => {
    const badges = allBadges()

    for (const badge of badges.children) {
        if (badge.children[0].innerHTML === text) {
            badge.remove()
        }
    }
}

const allBadges = () => {
    return document.getElementById('badges');
}

export {
    add,
    remove
}

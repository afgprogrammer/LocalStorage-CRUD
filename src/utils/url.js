const add = (key, text) => {
    const url = new URLSearchParams(window.location.search)

    if (key === 'search') {
        if (url.has(key) && url.get(key).length > 0) {
            url.set(key, url.get(key) + `,${text}`)
        } else {
            url.set(key, text)
        }
    } else {
        url.set(key, text)
    }
    
    window.location.search = url
}

const remove = (key, text) => {
    const url = new URLSearchParams(window.location.search)

    if (key === 'age') {
        url.delete('age')
    }
    
    if (key === 'search') {
        let search = url.get('search').split(",")
            search = search.filter((s) => s != text)

        url.set(key, search.join(','))
    }

    window.location.search = url
}

const convertStringToUrlObject = () => {
    const currentSearch = window.location.search.replace('?', '')
    const items = currentSearch.split("&")
    
    let obj = {}

    items.forEach((item) => {
        const [key, value] = item.split('=')

        obj[key] = value
    })

    return obj
}

const convertObjectToString = () => {

}

export {
    add,
    remove
}

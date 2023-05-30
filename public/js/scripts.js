const redirect = (url) => {
    document.location.pathname = url
}

const pathBack = () => {
    let path = document.location.pathname.split('/')
    let newPath = ''
    for (let index = 0; index < path.length - 1; index++) {
        if (path[index] !== '') {
            newPath += '/' + path[index];
        }
    }
    redirect(newPath)
}
// const send = () => {
//     const form = document.getElementById('form')
//     const inputs = form.getElementsByClassName('elements')
//     console.log(inputs)
//     const formData = new FormData()
//     for (const index in inputs) {
//         if (!Number.isInteger(inputs[index].name) && inputs[index].name != undefined && inputs[index].name != 'item' && inputs[index].name != 'namedItem') {
//             formData.append(inputs[index].name,inputs[index].name)
//         }

//     }
//     console.log(formData)
// }

const create = () => {
    document.location.pathname = (`${document.location.pathname}/create`)
}


const paginationNext = (page, max) => {
    page = parseInt(page)
    max = parseInt(max)
    if (page + 1 <= max) {
        document.location.search = `?page=${page + 1}`
    }


}
const paginationBack = (page) => {
    page = parseInt(page)
    if (page - 1 >= 1) {
        document.location.search = `?page=${page - 1}`
    }
}

const Link = (id) => {
    document.location.pathname = `${document.location.pathname}/view/${id}`
}



const edit = () => {
    let path = document.location.pathname.split('/')
    path[path.length - 2] = 'edit'
    let url = ''
    for (let i = 0; i < path.length; i++) {

        if (i != 0) {
            url = url + '/' + path[i]
        } else {
            url = path[i]
        }

    }
    document.location.pathname = url
}

const view = () => {
    let path = document.location.pathname.split('/')
    path[path.length - 2] = 'view'
    let url = ''
    for (let i = 0; i < path.length; i++) {
        if (i != 0) {
            url = url + '/' + path[i]
        } else {
            url = path[i]
        }

    }
    document.location.pathname = url
}

const Main = () => {
    let path = document.location.pathname.split('/')
    let url = ''
    for (let i = 0; i < path.length - 1; i++) {
        if (i != 0) {
            url = url + '/' + path[i]
        } else {
            url = path[i]
        }
    }
    document.location.pathname = url
}

const Perenaprovleniye = () => {
    let path = document.location.pathname.split('/')
    if (path[path.length - 1] != 'create') {
        view()
    } else {
        Main()
    }
}

const del = async () => {
    console.log(document.location.pathname.split('/'))
    if (confirm('You are have delete?')) {
        let id = document.location.pathname.split('/')
        let path = id[id.length - 3]
        id = id[id.length - 1]
        const result = await fetch(`${document.location.origin}/admin/${path}/delete/${id}`, {
            method: 'POST'
        })
        let path2 = document.location.pathname.split('/')
        let url = ''
        for (let i = 0; i < path2.length - 2; i++) {
            if (i != 0) {
                url = url + '/' + path2[i]
            } else {
                url = path2[i]
            }
        }
        document.location.pathname = url
    }

}
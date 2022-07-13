const productsCart = [
    {
        id: 1,
        name: 'Chocolate',
        price: 10.00,
    },
    {
        id: 2,
        name: 'Uva',
        price: 8.00,
    },
    {
        id: 3,
        name: 'Maçã',
        price: 7.00,   
    },
    {
        id: 3,
        name: 'Chocolate',
        price: 10.00,
    },
    {
        id: 4,
        name: 'Uva',
        price: 8.00,
    },
    {
        id: 5,
        name: 'Maçã',
        price: 7.00,    
    },
    {
        id: 6,
        name: 'Chocolate',
        price: 10.00,
    }
]

function soma (arr) {
    let totalCompra = 0

    for(let i = 0; i < arr.length; i++) {
        totalCompra += arr[i].price
    }
    return totalCompra
}


function carrinhoDeCarinho (array) {
    const body = document.querySelector('body')
    const main = document.createElement('main')
    body.appendChild(main)

    const ul = document.createElement('ul')

    for(let i = 0; i < array.length; i++) {
        
        const li = document.createElement('li')
        const h3 = document.createElement('h3')
        const p  = document.createElement('p')

        h3.innerText = array[i].name
        li.appendChild(h3)
        
        p.innerText = `R$ ${array[i].price},00`
        li.appendChild(p)

        ul.appendChild(li)
    }

    const totalP  = document.createElement('p')
    const totalH3 = document.createElement('h3')
    const section = document.createElement('section')  
    const totalUl = document.createElement('ul')
    const totalLi = document.createElement('li')
    const button  = document.createElement('button')
    const h1      = document.createElement('h1')
    
    totalH3.innerText = 'Total'
    totalLi.appendChild(totalH3)

    totalP.innerText = `R$ ${soma(array)},00`
    totalLi.appendChild(totalP)

    totalUl.appendChild(totalLi)
    section.appendChild(totalUl)

    button.innerText = 'Finalizar Compras'
    section.appendChild(button)

    h1.innerText = 'Virtual Market'

    main.appendChild(h1)
    main.appendChild(ul)
    main.appendChild(section)

    return body
}

carrinhoDeCarinho (productsCart)


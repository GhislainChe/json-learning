const products = [
    {name: "laptop", price: 1200},
    {name: "Phone", price: 700},
]

let list = document.getElementById('list')

products.forEach(product => {
    let div = document.createElement('div')
    div.className = 'product'

    div.innerHTML = `
        <h1>${product.name}</h1>
        <p>$${product.price}</p>
    `

    list.appendChild(div)
})
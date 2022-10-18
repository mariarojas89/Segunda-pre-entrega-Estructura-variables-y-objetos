(function () {
const itemsArray = ["item-1","item-2","item-3"]
const cart = {}

const draw = () => {
    const items$ = document.querySelector(".items")
    document.querySelector(".items").innerHTML = ""
    itemsArray.map(item => {
        const element = document.createElement("button")
        element.className = "cart-button"
        element.dataset.id = item
        element.innerHTML = cart[item] ? "Sacar " + item : "Agregar " + item
        items$.appendChild(element)

        element.addEventListener("click", handler)
    })
    document.querySelector(".counter").innerHTML = Object.values(cart).filter(item => item).length + ""

}
const handler = (event) => {
    const itemId = event.target.dataset.id;
    cart[itemId] = !cart[itemId]

    console.log(cart)
    draw();
}

draw()
})()
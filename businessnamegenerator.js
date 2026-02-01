let adj = {
    adjec1:"crazy",
    adjec2:"amazing",
    adjec3:"fire"
}
// functions use will be more efficent but
const adjval = Object.values(adj)
const ranvalue = adjval[Math.floor(Math.random() * adjval.length)]

let shopname = prompt("Enter your shop name: ")

let ano = {
    ano1:"bros",
    ano2:"limited",
    ano3:"hub"
}
const anoval = Object.values(ano)
const ranvalano = anoval[Math.floor(Math.random() * anoval.length)]


alert(`${ranvalue} ${shopname} ${ranvalano}`)
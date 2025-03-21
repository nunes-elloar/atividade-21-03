//27 km com 1 l combustivel = R$5,40

let combustivel, distancia 
distancia = prompt("Digite a distaância pecorrida...")
combustivel = prompt("Digite quanto você pagou em 1/um litro de combustível...")

function custo(){
    const dist = distancia
    const combus = combustivel
    let total = (dist / 27) * combus

    return total
}

custo()
console.log(custo())
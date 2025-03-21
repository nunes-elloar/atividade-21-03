// destructuring

const handleMouseMove = (event) => {
const clientY = event.clientY 
const clientX = event.clientX
console.log(`Eixo X: ${clientX}`)
console.log(`Eixo Y: ${clientY}`)
}

// Destruindo uma função
const handleMouseMoveDes = (event) => {
    const {clientY, clientX} = event
    console.log(`Eixo X: ${clientX}`)
}

// Destruturando nos parametros da função
const handleMouseMovePar = ({clientX, clientY}) => {
    console.log(`Eixo Y: ${clientY}`)
}

document.documentElement.addEventListener("mousemove", handleMouseMovePar)
const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
]

const [a, b] = objetos
const listA = [...Object.keys(a), ...Object.keys(b)]
const values = [...Object.values(a), ...Object.values(b)].reduce((acc, value) => acc + value)

console.log(listA);
console.log(values);

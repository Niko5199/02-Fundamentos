const deadpool = {
    name : 'Wade',
    lastname: 'Winston',
    poder: 'Regeneracion',
    getNombre(){
        return `${name} - ${lastname} - ${poder}`;
    }
}

const {name,lastname,poder,getNombre} = deadpool;

console.log(name)
console.log(lastname)
console.log(poder)
console.log(getNombre())

const printAntiHeroe = function({name, lastname, poder, edad=0}){
    console.log(name, lastname, poder, edad)
}

printAntiHeroe(deadpool)
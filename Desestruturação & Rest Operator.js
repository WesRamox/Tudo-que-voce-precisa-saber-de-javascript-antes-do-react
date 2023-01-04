const user = {
    name: 'Wesley',
    age: '17',
    address: {
        street: 'Rua teste',
        number: 69,
    },
}

// Desestruturação

// function mostraIdade({ age }) {
//     return user.age
// }

// const { address, age, nickname = 'Litzzin' } = user
// document.body.innerText = JSON.stringify({ address, age, nickname })
// document.body.innerText = mostraIdade(user)

// Rest operator

// const { name, age, ...rest } = user

const array = [1, 2, 3, 4, 5, 6];

const [first, , third, ...rest] = array;

document.body.innerText = JSON.stringify({ first, third, rest })
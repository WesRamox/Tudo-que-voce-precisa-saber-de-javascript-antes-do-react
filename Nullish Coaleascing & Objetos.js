// Nullish Coalescing Operator

// const idade = 17;

// document.body.innerText = "Sua idade é: " + (idade ?? 'Não informado')

// Objetos

const user = {
    name: 'Wesley',
    age: '17',
    address: {
        street: 'Rua teste',
        number: 69,
    },
}

// Verifica se tem 'name' dentro do objeto
document.body.innerText = ('name' in user)

// Pega todas as chaves do objeto
document.body.innerText = Object.keys(user)

// Pega os valores das chaves do objeto
document.body.innerText = JSON.stringify(Object.values(user))

// document.body.innerText = JSON.stringify(Object.entries(user))



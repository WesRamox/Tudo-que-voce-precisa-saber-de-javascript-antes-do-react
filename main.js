const user = {
    name: 'Wesley',
    age: '17',
    address: {
        street: 'Rua teste',
        number: 69,
        zip: {
            code: '07180340',
            city: 'Guarulhos',
        }
    },
}

document.body.innerText = user.address ? user.address.street : 'Não informado'
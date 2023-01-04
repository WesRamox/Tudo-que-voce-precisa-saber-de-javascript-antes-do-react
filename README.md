# Tudo que você deve estudar de JavaScript antes do React

## Referência

 - [Rocketseat](https://www.youtube.com/watch?v=37SwqREHRGI)

# Conteúdo

## Nullish Coalescing Operator
> O operador de coalescência nula (??) é um operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.

### Demonstração: 
```const foo = null ?? 'default string';
console.log(foo);
// expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// expected output: 0 
```

## Objetos
> Em JavaScript, um objeto é uma entidade independente, com propriedades e tipos. Compare-o com uma xícara, por exemplo. Uma xícara é um objeto, com propriedades. Uma xícara tem uma cor, uma forma, peso, um material de composição, etc. Da mesma forma, objetos em JavaScript podem ter propriedades, que definem suas características.

### Demonstração: 
```
var meuCarro = {
   modelo: "Mustang",
   cor: "Preto",
   ano: 1969
}
```

## Desestruturação
> A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas.

### Sintaxe:
``` 
var a, b, rest;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

({a, b} = {a:1, b:2});
console.log(a); // 1
console.log(b); // 2

// ES2016 - não implementado em Firefox 47a01
({a, b, ...rest} = {a:1, b:2, c:3, d:4});
```

## Rest Parameter
> A sintaxe de rest parameter (parâmetros rest) nos permite representar um número indefinido de argumentos como um array.

### Demonstração: 
```
function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1();  // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
```

## Optional Chaining
> O operador de encadeamento opcional ?. permite a leitura do valor de uma propriedade localizada internamente em uma cadeia de objetos conectados, sem que a validação de cada referência da cadeia seja expressivamente realizada.

### Demonstração: 
```
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined
```

## map()
> O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

### Demonstração:
```
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles é agora [2, 8, 18]. numbers ainda é [1, 4, 9]
```

## filter()
> O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

### Demonstração:
```
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

## every()
> O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. Este método retorna um valor booleano.

### Demonstração:
```
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

## some()
> O método some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.

### Demonstração:
```
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

## find()
> O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.

### Demonstração:
```
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
```

## findIndex()
> O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

### Demonstração:
```
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, não encontrado
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
```

## reduce()
> O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

### Demonstração:
```
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
```

## Promises
## ES Modules

## Documentação

[Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)


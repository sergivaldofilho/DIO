const users = ['Sergivaldo', 'Clemente', 'Gomes'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('N')
}

const persons =[
    {
        name: 'Sergivaldo',
        age: 29,
        gender: gender.MAN
    },
    {
        name: 'Clemente',
        age: 14,
        gender: gender.MAN
    },
    {
        name: 'Bruna',
        age: 24,
        gender: gender.WOMAN
    }

];

console.log('Itens do objeto array: ', users.length); //Retornar a quantidade de itens de um array
console.log('A variável persons é um array? ', Array.isArray(persons)); //Verifica se é um array

// Iterar os itens do array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`);
});

//Filtar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('Lista com os homens: ', mens);

//Retornar um novo array
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
})
console.log('Pessoas com adição do curso: ', personsWithCourse);

//Transformar array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);
console.log('Soma das idades: ', totalAge);

//Juntando operações
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) => {
                            age += person.age;
                            return age;
                        }, 0);
console.log('Soma das idades pares: ', totalEvenAges);
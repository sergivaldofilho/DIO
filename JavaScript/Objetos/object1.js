let user = {
    name: 'Sergivaldo'
}
console.log(user);

//Alterando a propriedade do objeto
user.name = 'Clemente';
console.log(user);

user['name'] = 'Gomes';
console.log(user);

const prop = 'name';
user[prop] = 'Sergivaldo';
console.log(user);

//Criando uma propriedade
user.lastName = 'Filho';
console.log(user);

//Deletando uma propriedade
delete user.name;

console.log(user);
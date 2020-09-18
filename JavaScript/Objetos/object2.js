const user = {
    name: 'Sergivaldo',
    lastName: 'Clemente Gomes Filho'
}

 console.log('Só as propriedades do objeto user: ', Object.keys(user));
 console.log('Só os valores do objeto user: ', Object.values(user));
 console.log('Lista com as propriedades e valores do objeto user: ', Object.entries(user));
 
 // Fazendo um merge de um objeto - Não recomendado
 Object.assign(user, {fullname: 'Sergivaldo Clemente Gomes Filho'});
 console.log('Objeto user atual(com merge): ', user); 
 // Fazendo um merge de um objeto - recomendado
 console.log('Merge no objeto user da forma correta: ', Object.assign({},user,{age: 26}));
 console.log('Objeto user atual(com merge): ', user);

 //Congelando qualquer alteração no objeto
 const newObj = {foo: 'bar'};
 console.log(newObj);
 Object.freeze(newObj);
 newObj.foo = 'changes';
 delete newObj.foo;
 newObj.bar = 'foo';
 console.log(newObj);

 //Permitindo a alteração da propriedade de um objeto
 const person = {name: 'Clemgomes'};
 console.log(person);
 Object.seal(person);
 person.name = 'changes';
 delete person.name;
 person.bar = 'foo';
 console.log(person);

 const symbol1 = Symbol();
 const symbol2 = Symbol();
 console.log('symbol1 é igual a symbol2? ', symbol1===symbol2);

 const nameSymbol1 = Symbol('name');
 const nameSymbol2 = Symbol('name');

 const userSymbol = {
     [nameSymbol1]: 'Sergivaldo',
     [nameSymbol2]: 'Clemente Gomes',
     lastName: 'Filho'
 }
 
 console.log(userSymbol)





(() => {
    this.name = 'Arrow Function';
    const getNameArrowFn = () => this.name;

    function getName(){
        return this.name;
    }

    const user = {
        name: 'Nome no objeto de execução',
        getNameArrowFn,     // Aqui o this vai fazer referência ao this da linha 2
        getName             // Aqui o this vai fazer referência ao objeto user
    }

    console.log(user.getNameArrowFn());
    console.log(user.getName());
})();
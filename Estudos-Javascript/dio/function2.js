(() => {

    this.name = 'arrow function'
    // arrow function this referencia o contesto
    const getNameArrowFunction = () => this.name //arrow function

    function getName(){
        //this referencia sempre onde ela é executada
        return this.name //Nome no Objeto de execução
    }

    const user = {
        name: 'Nome no Objeto de execução',
        getNameArrowFunction, //Nome no Objeto de execução
        getName //arrow function
    }

    console.log(user.getNameArrowFunction())
    console.log(user.getName())
})();
document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById("form");
    

    const cpf = document.getElementById("cpf");
    const telephone = document.getElementById("telephone");
    const cell = document.getElementById("cell");
    const mother = document.getElementById("mother");
    const father = document.getElementById("father");
    const cep = document.getElementById("cep");
    const address = document.getElementById("address");
    const number = document.getElementById("number");
    const complement = document.getElementById("complement");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirm = document.getElementById("confirm");

    //verificação nome comleto
    function validarNome(input, mensagem){
        const valor = input.value.tim();
        const partes = valor.split(' ').filter(p => p.length > 0);

        if(partes < 2){
            input.setCustomValidity
        }
    }
    

    //verificação data de nascimento
    const date = document.getElementById("date");
    const divRespons = document.getElementById("responsaveis")

    date.addEventListener('change', function () { //adiciona evento ao input

        const dataNasc = new Date(date.value); //cria um objeto para fazer calculos posteriormente
        const hoje = new Date(); //pega a data de hoje, também no formato de objeto

        let idade = hoje.getFullYear() - dataNasc.getFullYear();
        const mes = hoje.getMonth() - dataNasc.getMonth();

        //se o mês de aniversário ainda não chegou no ano atual, ou se estamo no mesmo mês, mas o dia não chegou,
        //  então não fez aniversário e subtrai um ano
        if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
            idade--;
        }

        if (idade < 18) {
            divRespons.style.display = 'block';

            mother.setAttribute('required', true); //tornam os campos obrigatórios
            father.setAttribute('required', true);

        } else {
            divRespons.style.display = 'none';

            mother.removeAttribute('required');
            father.removeAttribute('required');
        }
    })


    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("CADASTRADO COM SUCESSO!");
    })

})
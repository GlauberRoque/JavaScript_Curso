const cliente = {
    nome: 'Tayga',
    idade: 27,
    email: 'tayga_rayanne@hotmail.com',
    cpf: '12345678901',
    fones: ["81988745896", "81985476325"],
    dependente: [{
        nome: 'Testa',
        parentesco: 'Irmã',
        dataNascimento: '25/10/1998'
    },
    {
        nome: 'Maria',
        parentesco: 'Mãe',
        dataNascimento: '06/02/1965'
    }],
    saldo: 500,

    //metodo para depositar dinheiro na atributo saldo
    depositar: function(valor){
        this.saldo += valor
    }
}

let relatorio = "";

// percorendo as informações de um obejeto usando forIn
    for (let info in cliente){
        if(typeof cliente[info] === "object" || typeof cliente[info] === "function")
        {
            
            continue

        }else{
            
            relatorio += ` 
            ${info} ==> ${cliente[info]}
            `
        
        }
        
        
    }

    console.log(relatorio)
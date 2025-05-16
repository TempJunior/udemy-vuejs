const departamentos = [
    {
        id: 1,
        nome: "Vendas",
        funcionarios: [
            {
                id: 101,
                nome: "Ana",
                cargo: "Vendedor"
            },
            {
                id: 102,
                nome: "Carlos",
                cargo: "Gerente de vendas"
            }
        ]
    },
    {
        id: 2,
        nome: "TI",
        funcionarios: [
            {
                id: 201,
                nome: "Maria",
                cargo: "Desenvolvedor"
            },
            {
                id: 202,
                nome: "João",
                cargo: "Analista de sistemas"
            }
        ]
    }
]

function encontraFuncionarioPorId(lista, id){
    for (let departamento of lista){
        const funcionario = departamento.funcionarios.find(funcionario => funcionario.id === id)
        if (funcionario){
            return funcionario;
        }
    }
    return 'Não existe funcionarios com esse id'
}

console.log(encontraFuncionarioPorId(departamentos, 901));


const moment = require('moment');
const conexao = require('../infra/database/conexao');
const axios = require('axios');
const repository = require('../repository/atendimentosRepository');

class Atendimento {

    adiciona(atendimento) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        const validacoes = validarDados(atendimento, data, dataCriacao)
        const erros = validacoes.filter(campo => !campo.valido)

        if (erros.length) {
            return new Promise((reject) => reject(erros))
        } else {
            const atendimentoDatado = { ...atendimento, dataCriacao, data }
            return repository.adiciona(atendimentoDatado)
                .then(resultados => {
                    const id = resultados.insertId
                    return { ...atendimento, id }
                })
        }
    }

    lista() {
        return repository.lista()
    }

    buscaPorId(id) {
        return repository.buscaPorId(id)
            .then(async resultado => {
                const atendimento = resultado[0]
                const cpf = atendimento.cliente
                const { data } = await axios.get(`http://localhost:8082/${cpf}`)
                atendimento.cliente = data
                return atendimento
            })
    }

    altera(id, valores) {
        if (valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
        return repository.altera(id, valores)
            .then(async resultado => {
                const cpf = valores.cliente
                const { data } = await axios.get(`http://localhost:8082/${cpf}`)
                valores.cliente = data
                resultado = valores
                return resultado
            })
    }

    deleta(id) {
        return repository.deleta(id)
            .then(resultado => {
                resultado = { id }
                return resultado
            })
    }
}

module.exports = new Atendimento


function validarDados(atendimento, data, dataCriacao) {

    const dataEhVAlida = moment(data).isSameOrAfter(dataCriacao)
    const clienteValido = atendimento.cliente.length >= 5

    const validacoes = [
        {
            name: 'data',
            valido: dataEhVAlida,
            mensagem: 'Data deve ser maior ou igual a data atual'
        },
        {
            name: 'cliente',
            valido: clienteValido,
            mensagem: 'cliente deve ter pelo menos cinco caracteres'
        }

    ]

    return validacoes
}
const conexao = require('./conexao');

const executaQuery = (query, parametros = '') => {

    return new Promise((resolve, reject) => {
        conexao.query(query, parametros, (error, resultados, campos) => {
            if (error) {
                reject(error);
            } else {
                resolve(resultados);
            }
        })
    })

}

module.exports = executaQuery
const query = require('../infra/database/queries')

class AtendimentosRepository{
    adiciona(atendimento) {
        const sql = 'INSERT INTO Atendimentos SET ?'
        return query(sql, atendimento)
    }

    lista(){
        const sql = 'SELECT * FROM Atendimentos'

        return query(sql)
    }

    buscaPorId(id) {
        const sql = `SELECT * FROM Atendimentos WHERE id = '${id}'`
        return query(sql)
    }

    altera(id, valores){
        const sql = 'UPDATE Atendimentos SET ? WHERE id= ?'

        return query(sql, [valores, id])
    }

    deleta(id){
        const sql = `DELETE FROM Atendimentos WHERE id= '${id}'`
        return query(sql)
    }
}

module.exports = new AtendimentosRepository()
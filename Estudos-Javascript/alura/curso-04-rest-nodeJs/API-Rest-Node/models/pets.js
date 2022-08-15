const conexao = require('../infra/database/conexao');
const uploadDeArquivos = require('../infra/arquivos/uploadDeArquivos')

class Pet {
    adiciona(pet, res) {
        const query = 'INSERT INTO Pets SET?'

        uploadDeArquivos(pet.imagem, pet.nome, (erro, novoCaminho) => {

            if (erro) {
                res.status(400).json(erro)
            } else {
                const novoPet = { nome: pet.nome, imagem: novoCaminho }
                conexao.query(query, novoPet, erro => {
                    if (erro) {
                        res.status(400).json({ erro })
                    } else {
                        res.status(200).json(novoPet)
                    }
                })
            }
        })
    }
}
module.exports = new Pet();
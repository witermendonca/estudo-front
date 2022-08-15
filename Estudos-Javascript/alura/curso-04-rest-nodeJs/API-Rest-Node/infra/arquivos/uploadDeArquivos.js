const fs = require('fs');
const path = require('path');

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {

    const tiposValidos = ['jpg', 'png', 'gif', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoEValido = tiposValidos.indexOf(tipo.substring(1)) !== -1

    if (!tipoEValido) {
        console.error('Tipo de aquivo inválido')
        callbackImagemCriada('Tipo de aquivo inválido')
    } else {
        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`

        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(false, novoCaminho))
    }

}
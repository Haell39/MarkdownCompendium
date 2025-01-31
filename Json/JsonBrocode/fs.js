const fs = require('fs');

// Caminho absoluto para o arquivo JSON
const caminhoDoArquivo = 'D:/GitHub Desktop/MKD_Repo/Json/JsonBrocode/person.json';

// Lendo o arquivo JSON
fs.readFile(caminhoDoArquivo, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);
        console.log(jsonData); // Exibe os dados do JSON
    } catch (parseError) {
        console.error('Erro ao analisar o JSON:', parseError);
    }
});

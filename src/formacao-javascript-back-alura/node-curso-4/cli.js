import fs from 'fs'
import { writeFile } from 'fs/promises';

import trataErro from "./error/TratarErro.js";
import { contaPalavras } from './index.js'
import { montaSaidaArquivo } from "./helpers.js";
import { Command } from 'commander'
import path from 'path'
import chalk from 'chalk'

const program = new Command();

program
    .version('0.0.1')
    .option('-t, --text <string>', 'Caminho do texto a ser processado.')
    .option('-d, --destiny <string>', 'Caminho da pasta para salvar o arquivo de results.')
    .action((options) => {
        const { text, destiny } = options;

        if (!text || !destiny) {
            console.error(chalk.red('Insira o caminho de origem e destino! '));
            program.help();
            return;
        }

        const caminhoTexto = path.resolve(text);
        const caminhoDestino = path.resolve(destiny);

        try{
            processaArquivo(caminhoTexto, caminhoDestino);
            console.log('Texto processado com sucesso!');
        }catch (e){
            console.log('Ocorreu um erro no process', e);
        }
    })

program.parse();

function processaArquivo(texto, destino) {
    fs.readFile(texto, 'utf-8', (err, texto) => {
        try {
            if (err) throw err;
            const result = contaPalavras(texto);
            criaEhSalvaArquivos(result, destino);
        }catch (err) {
            trataErro(err);
        }
    });
}

async function criaEhSalvaArquivos(listaPalavras, endereco){
    const arquivoNovo = `${endereco}/resultado.txt`
    const textoPalavras = montaSaidaArquivo(listaPalavras);
    try{
        await writeFile(arquivoNovo, textoPalavras);
        console.log('Arquivo enviado com sucesso')
    }catch (erro) {
        throw erro;
    }
}
const fs = require('fs/promises');
const path = require('path');
const chalk = require('chalk');

// Caminhos
const dirPath = path.join(__dirname, 'storage');
const filePath = path.join(dirPath, 'aula05.txt');

// Conteúdo EXATO solicitado
const content = `Aula 05 - Manipulação de arquivos com Node.js.

Arquivo criado com sucesso durante a atividade final.`;

// Função principal
async function executar() {
    try {
        console.log(chalk.blue('Iniciando atividade...'));

        // Criar pasta (se não existir)
        console.log(chalk.yellow('Verificando pasta storage...'));
        await fs.mkdir(dirPath, { recursive: true });
        console.log(chalk.green('Pasta pronta!'));

        // Criar arquivo
        console.log(chalk.blue('Criando arquivo aula05.txt...'));
        await fs.writeFile(filePath, content);

        // Ler arquivo
        console.log(chalk.blue('Lendo conteúdo do arquivo...'));
        const data = await fs.readFile(filePath, 'utf-8');

        // Exibir conteúdo
        console.log(chalk.white('\nConteúdo do arquivo:'));
        console.log(chalk.gray(data));

        // Finalização
        console.log(chalk.green('\nProcesso finalizado com sucesso!'));
    } catch (erro) {
        console.log(chalk.red('Erro ao executar o programa:'), erro);
    }
}

// Executar
executar();
// Obtém a data atual
var dataAtual = new Date();

// Formata a data no formato "dia/mês/ano"
var dia = dataAtual.getDate();
var mes = dataAtual.getMonth() + 1; // Mês é baseado em zero, então adicionamos 1
var ano = dataAtual.getFullYear();
var dataFormatada = dia + '/' + mes + '/' + ano;

// Define o cabeçalho Content-Type para texto simples
// Isso garante que o navegador interprete o conteúdo como texto simples
// e não como HTML
header("Content-Type: text/plain");

// Retorna a data atual formatada
console.log(dataFormatada);

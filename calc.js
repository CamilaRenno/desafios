const args = process.argv.slice();
//console.log(process.argv);

var operacao = args[2];
var resultado = parseInt(args[3]);
if (operacao == '+') {
    for (let index = 4; index < args.length; index++) {
        resultado += parseInt(args[index]);         
    }
}
else if (operacao == '-') {
    for (let index = 4; index < args.length; index++) {
        resultado -= parseInt(args[index]);         
    }
}

console.log(`Resultado: [${resultado}]`);
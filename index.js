const Leitura = require('./leitura');

// Criar uma instância da classe Leitura
const leitura = new Leitura();

// Chamar o método convertXML e imprimir a lista retornada
leitura.convertXML((error, adb_entryList) => { //Chama o método passando um callback para que possa retornar a lista completa
    if (error) {
        console.error(error);
    } else {
        // Itera sobre cada objeto na lista
        adb_entryList.forEach((entry) => { //Percorre cada elemento da lista acessando a propriedade de cada objeto
            // Acessa as propriedades do objeto
            console.log('Nome:', entry.public_data[0].sflname)
            console.log('Data Nascimento:', entry.public_data[0].bdata[0].sbdate[0]._.replace("/", "-"))
            console.log('Hora Nascimento:', entry.public_data[0].bdata[0].sbtime[0]._)

        });
    }
});

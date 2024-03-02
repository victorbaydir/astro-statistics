const fs = require('fs');
const xml2js = require('xml2js');

class Leitura {

    constructor(){
        this.xml_path = __dirname+'/resources/c_sample.xml';
        this.parser = new xml2js.Parser();
    }

    convertXML(callback){
        fs.readFile(this.xml_path, (error, data) => { //Lê o arquivo xml
            if(error){
               return callback('ERRO AO LER O XML: ' + error, null);
            }
        
            this.parser.parseString(data, (error2, result) => {
                if(error2){
                    return callback('ERRO AO CONVERTER O XML: ' + error2, null);
                 }
        
                 // Verifique se o objeto result.astrodatabank_export.adb_entry existe e é um array
                 if (result && result.astrodatabank_export && result.astrodatabank_export.adb_entry && Array.isArray(result.astrodatabank_export.adb_entry)) {
                    // Não é necessário converter para string e depois fazer o parse novamente
                    const adb_entryList = result.astrodatabank_export.adb_entry;
        
                    // Retornar a lista
                    callback(null, adb_entryList);
                 } else {
                    callback('Formato do XML inesperado ou sem dados válidos.', null);
                 }
            })
        })
    }
}

module.exports = Leitura;

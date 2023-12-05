/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */
define(['N/log', 'N/record', 'N/currentRecord'], function(log, record, currentRecord) {

    function pageInit(context) {
        // Obtém o registro atual
        var currentRecordObj = currentRecord.get();

        // Exibe informações no console usando log.debug
        alert('Hello World');
    }

    // Exporta a função pageInit para que ela seja chamada
    return {
        pageInit: pageInit
    };

});

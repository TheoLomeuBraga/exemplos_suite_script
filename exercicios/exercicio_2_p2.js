//id busca:
//customsearch3563

/**
 * @NApiVersion 2.x
 * @NScriptType MapReduceScript
 */
define(['N/search', 'N/record'], function(search, record) {

    function getInputData() {
        // Defina os parâmetros da sua busca customizada aqui
        var customSearch = search.load({
            id: 'customsearch3563'
        });

        // Adquira os resultados da busca
        var searchResults = customSearch.run().getRange({
            start: 0,
            end: 4 
        });

        return searchResults;
    }

    function map(context) {
        var searchResult = JSON.parse(context.value);

        var myRecord = record.load({
            type: searchResult.recordType,
            id: searchResult.id,
            isDynamic: true
        });

        myRecord.setValue({
            fieldId: 'horizonte_passado',
            value: 30
        });

        
        myRecord.save()

    }

    function reduce(context) {

    }

    function summarize(summary) {
    }

    return {
        getInputData: getInputData,
        map: map,
        reduce: reduce,
        summarize: summarize
    };
});

/**
 * @NApiVersion 2.x
 * @NScriptType MapReduceScript
 */

//id busca:
//customsearch3563

define(['N/log', 'N/search', 'N/record', 'N/runtime'], function(log, search, record, runtime) {

    function getInputData() {
        // Defina os parâmetros da busca salva que retorna os registros do instantâneo da cadeia de suprimentos
        var searchId = 'sua_busca_salva_id'; // Substitua pelo ID real da sua busca salva
        var filters = []; // Adicione quaisquer filtros necessários

        // Execute a busca
        var resultSet = search.load({
            id: searchId
        }).run();

        // Retorne os resultados para serem processados pelo script
        return resultSet;
    }

    function map(context) {
        // Processa cada resultado retornado pela busca
        var searchResult = JSON.parse(context.value);

        // Obtém o ID do registro encontrado
        var recordId = searchResult.id;

        // Carrega o registro para atualização
        var myRecord = record.load({
            type: 'TIPO_DE_REGISTRO', // Substitua pelo tipo de registro real
            id: recordId
        });

        // Atualiza o campo desejado
        myRecord.setValue({
            fieldId: 'SEU_CAMPO', // Substitua pelo ID do campo a ser atualizado
            value: 'NOVO_VALOR' // Substitua pelo novo valor do campo
        });

        // Salva as alterações
        myRecord.save();
    }

    function summarize(summary) {
        // Loga informações sobre o resumo do processo Map/Reduce
        log.audit({
            title: 'Resumo do Map/Reduce',
            details: 'Total de registros processados: ' + summary.inputSummary.total
        });
    }

    return {
        getInputData: getInputData,
        map: map,
        summarize: summarize
    };

});

/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */
define(['N/log', 'N/record', 'N/currentRecord'], function (log, record, currentRecord) {

    function pageInit(context) {

        var currentRecordObj = currentRecord.get()

        //exercicio 1
        function getField(id){
            return currentRecordObj.getField({
                fieldId: id
            })
        }
        getField("billingclass").isDisplay = false


        //exercicio 2
        function getValue(id){
            return context.currentRecord.getValue({
                fieldId: id
            });
        }
        function setValue(id,value){
            return context.currentRecord.setValue({
                fieldId: id,
                value: value
            });
        }
        var telefone = getValue("mobilephone")
        setValue("phone",telefone)
        setValue("officephone",telefone)

        //exercicio 3
        if(getField("allocationdepartment") == "T.I Sistemas"){
            getField("diretor","Guilherme N Silva")
            getField("supervisor","Henrique M Vetorazzi")
        }
        

    }

    // Exporta a função pageInit para que ela seja chamada
    return {
        pageInit: pageInit
    };

});

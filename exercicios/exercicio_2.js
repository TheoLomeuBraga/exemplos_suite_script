/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/record', 'N/log', 'N/ui/serverWidget'],
    (record, log,serverWidget) => {

        

        function beforeLoad(context) {
            if (context.type == context.UserEventType.VIEW) {

                context.form.addField({
                    id: 'custpage_script_field',
                    type: serverWidget.FieldType.INLINEHTML,
                    label: 'Script Field'
                }).defaultValue = '<script>function redirect() { window.location.href = "https://6331030-sb1.app.netsuite.com/app/accounting/transactions/journal.nl?whence="; }</script>';


                context.form.addButton({
                    id: 'custpage_avancar_pagamento', // Adicione o prefixo "custpage" ao ID
                    label: 'Avançar Pagamento',
                    functionName: 'redirect'
                });
            }

            
        }

        return {
            beforeLoad: beforeLoad
        };
    });

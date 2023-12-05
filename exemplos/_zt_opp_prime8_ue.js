/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/record'],
    (record) => {

        function beforeLoad(scriptContext) {

            try {
                if (scriptContext.type === scriptContext.UserEventType.CREATE) {

                    const newRecord = scriptContext.newRecord;

                    // Obtém o ID da subsidiária do cliente
                    const subsidiaryId = newRecord.getValue({ fieldId: 'subsidiary' });

                    // Verifica se a subsidiária é igual a 8 (Prime8)
                    if (subsidiaryId === '8') {

                        // Obtém o ID do formulário personalizado "Oportunidade Canais"
                        const customFormId = 294; // Substitua pelo ID correto do formulário

                        // Define o formulário personalizado no pedido de venda
                        newRecord.setValue({ fieldId: 'customform', value: customFormId });

                        // Salva as alterações na oportunidade
                        record.submitFields({
                            type: record.Type.opportunity, // Altere para o tipo correto, se necessário
                            id: newRecord.id,
                            values: {
                                'customform': customFormId
                            }
                        });
                    }
                }
            } catch (e) {
                log.error('Error:', e.message);
            }


        }

        function beforeSubmit(scriptContext) {
            
        }

        return {
            beforeSubmit,
            beforeLoad
        };
    });

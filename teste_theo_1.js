/**
 *@NApiVersion 2.x
 *@NScriptType Suitelet
 */
 define(['N/ui/serverWidget'],
        
 function(serverWidget) {
    function onRequest(context){
      
        var request = context.request;
        var response = context.response;

        var form = serverWidget.createForm({
            title : "ola mundo",
            hideNavbar: true
        })

        var nameFld = form.addField({
            id: "custpage_sdr_emp_name",
            type: serverWidget.FieldType.TEXT,
            label: "Name"
        })

        var notesFld = form.addField({
            id: "custpage_sdr_emp_notes",
            type: serverWidget.FieldType.TEXT,
            label: "Notes"
        })

        var empIDFld = form.addField({
            id: "custpage_sdr_emp_id",
            type: serverWidget.FieldType.TEXT,
            label: "emp ID"
        })

        

        form.addSubmitButton("OK")

        response.writePage(form)
    }

    

    return{
        onRequest: onRequest
    }

 });
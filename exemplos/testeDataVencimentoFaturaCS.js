/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 */

define(["N/currentRecord"], function (currentRecord) {
    function add30DaysToDueDate() {
      var record = currentRecord.get();
      var extendedDate = record.getValue("duedate"); // Get the value of the "duedate" field
  
      // Verifies if the due date is valid and a string
      if (extendedDate && typeof extendedDate === "string") {
        // Convert the date string to a Date object
        var dateParts = extendedDate.split("/");
        if (dateParts.length === 3) {
          var day = parseInt(dateParts[0], 10);
          var month = parseInt(dateParts[1], 10) - 1; // Months are 0-based in JavaScript
          var year = parseInt(dateParts[2], 10);
          var extendedDateObj = new Date(year, month, day);
  
          // Add 30 days to the due date
          extendedDateObj.setDate(extendedDateObj.getDate(duedate) + 30);
  
          // Format the new due date back to "DD/MM/YYYY"
          var custbodyzoom_dat_ven_custom =
            ("00" + extendedDateObj.getDate()).slice(-2) +
            "/" +
            ("00" + (extendedDateObj.getMonth() + 1)).slice(-2) +
            "/" +
            extendedDateObj.getFullYear();
  
          // Sets the new due date in the "duedate" field
          record.setValue("newextendedDate", custbodyzoom_dat_ven_custom);
        }
      }
  
      log.debug("Data: ", extendedDate);
      log.debug("Data Prorrogada: ", custbodyzoom_dat_ven_custom);
    }
  
    function pageInit(context) {
      if (context.mode === "edit" || context.mode === "create") {
        add30DaysToDueDate();
      }
    }
  
    return {
      pageInit: pageInit,
    };
  });  
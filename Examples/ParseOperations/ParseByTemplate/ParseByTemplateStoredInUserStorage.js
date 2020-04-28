"use strict";

// This example demonstrates how to parse a document using template from user storage.
class ParseByTemplateStoredInUserStorage {
    static async Run() {
        let fileInfo = new parser_cloud.FileInfo();
        fileInfo.filePath = "words-processing/docx/companies.docx";

        let options = new parser_cloud.ParseOptions();
        options.fileInfo = fileInfo;

        options.templatePath = "templates/companies.json";
        require('../../TemplateUtils').CreateIfNotExist("templates/companies.json");

        let request = new parser_cloud.ParseRequest(options);
        let response = await parseApi.parse(request);

        response.fieldsData.forEach(data => {
            if (data.pageArea.pageTextArea != null) {
                console.log("Field name: " + data.name + ". Text :" + data.pageArea.pageTextArea.text);
            }

            if (data.pageArea.pageTableArea != null) {
                console.log("Table name: " + data.name);

                data.pageArea.pageTableArea.pageTableAreaCells.forEach(cell => {
                    console.log("Table cell. Row " + cell.rowIndex + " column " + cell.columnIndex + ". Text: " + cell.pageArea.pageTextArea.text);
                });
            }
        });
    }
}
module.exports = ParseByTemplateStoredInUserStorage;
"use strict";

// This example demonstrates how to parse a document placed inside a container.
class ParseByTemplateOfADocumentInsideAContainer {
    static async Run() {
        let fileInfo = new parser_cloud.FileInfo();
        fileInfo.filePath = "containers/archive/companies.zip";

        let options = new parser_cloud.ParseOptions();
        options.fileInfo = fileInfo;
        options.template = require('../../TemplateUtils').GetTemplate();
        
        let containerItemInfo = new parser_cloud.ContainerItemInfo();
        containerItemInfo.relativePath = "companies.docx";
        options.containerItemInfo = containerItemInfo;

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
module.exports = ParseByTemplateOfADocumentInsideAContainer;
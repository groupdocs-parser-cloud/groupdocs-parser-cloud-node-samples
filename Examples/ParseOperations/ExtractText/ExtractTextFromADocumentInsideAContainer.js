"use strict";

// This example demonstrates how to extract text from container item.
class ExtractTextFromADocumentInsideAContainer {
    static async Run() {
        let fileInfo = new parser_cloud.FileInfo();
        fileInfo.filePath = "pdf/PDF with attachements.pdf";
        fileInfo.password = "password";

        let options = new parser_cloud.TextOptions();
        options.fileInfo = fileInfo;
        options.startPageNumber = 2;
        options.countPagesToExtract = 1;

        let containerItemInfo = new parser_cloud.ContainerItemInfo();
        containerItemInfo.relativePath = "template-document.pdf";
        options.containerItemInfo = containerItemInfo;

        let request = new parser_cloud.TextRequest(options);
        let response = await parseApi.text(request);
        console.log("Text: " + response.pages[0].text);
    }
}
module.exports = ExtractTextFromADocumentInsideAContainer;
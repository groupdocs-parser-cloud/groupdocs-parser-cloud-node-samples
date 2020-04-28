"use strict";

// This example demonstrates how to extract text from container item.
class ExtractTextFromTheWholeDocument {
    static async Run() {
        let fileInfo = new parser_cloud.FileInfo();
        fileInfo.filePath = "email/eml/embedded-image-and-attachment.eml";

        let options = new parser_cloud.TextOptions();
        options.fileInfo = fileInfo;

        let request = new parser_cloud.TextRequest(options);
        let response = await parseApi.text(request);
        console.log("Text: " + response.text);
    }
}
module.exports = ExtractTextFromTheWholeDocument;
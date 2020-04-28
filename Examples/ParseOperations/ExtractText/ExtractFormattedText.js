"use strict";

// This example demonstrates how to extract formatted text from document.
class ExtractFormattedText {
    static async Run() {
        let fileInfo = new parser_cloud.FileInfo();
        fileInfo.filePath = "words-processing/docx/formatted-document.docx";

        let options = new parser_cloud.TextOptions();
        options.fileInfo = fileInfo;

        let formattedTextOptions = new parser_cloud.FormattedTextOptions();
        formattedTextOptions.mode = "Markdown";
        options.formattedTextOptions = formattedTextOptions;

        let request = new parser_cloud.TextRequest(options);
        let response = await parseApi.text(request);
        console.log("Text: " + response.text);

    }
}
module.exports = ExtractFormattedText;
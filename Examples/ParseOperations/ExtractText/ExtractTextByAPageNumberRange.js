"use strict";

// This example demonstrates how to extract text from pages range.
class ExtractTextByAPageNumberRange {
    static async Run() {
        let fileInfo = new parser_cloud.FileInfo();
        fileInfo.filePath = "cells/two-worksheets.xlsx";

        let options = new parser_cloud.TextOptions();
        options.fileInfo = fileInfo;
        options.startPageNumber = 1;
        options.countPagesToExtract = 1;

        let request = new parser_cloud.TextRequest(options);
        let response = await parseApi.text(request);

        response.pages.forEach(page => {
            console.log("PageIndex: " + page.pageIndex + ". Text: " + page.text);
        });
    }
}
module.exports = ExtractTextByAPageNumberRange;
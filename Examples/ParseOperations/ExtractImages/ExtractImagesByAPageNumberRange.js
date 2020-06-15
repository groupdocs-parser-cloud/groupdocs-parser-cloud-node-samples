"use strict";

// This example demonstrates how to extract images from pages range.
class ExtractImagesByAPageNumberRange {
    static async Run() {
        let fileInfo = new parser_cloud.FileInfo();
        fileInfo.filePath = "slides/three-slides.pptx";
        let options = new parser_cloud.ImagesOptions();
        options.fileInfo = fileInfo;
        options.startPageNumber = 1;
        options.countPagesToExtract = 2;

        let request = new parser_cloud.ImagesRequest(options);
        let response = await parseApi.images(request);
        response.pages.forEach(page => {
            console.log("Images from " + page.pageIndex + " page.");
            page.images.forEach(image => {
                console.log("Image path " + image.path + ". Download url: " + image.downloadUrl);
                console.log("Image format " + image.fileFormat + ". Page index: " + image.pageIndex);
            });
        });
    }
}
module.exports = ExtractImagesByAPageNumberRange;
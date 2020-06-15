"use strict";

// This example demonstrates how to extract images from whole document.
class ExtractImagesFromTheWholeDocument {
    static async Run() {
        let fileInfo = new parser_cloud.FileInfo();
        fileInfo.filePath = "slides/three-slides.pptx";

        let options = new parser_cloud.ImagesOptions();
        options.fileInfo = fileInfo;

        let request = new parser_cloud.ImagesRequest(options);
        let response = await parseApi.images(request);
        response.images.forEach(image => {
            console.log("Image path " + image.path + ". Download url: " + image.downloadUrl);
            console.log("Image format " + image.fileFormat + ". Page index: " + image.pageIndex);
        });
    }
}
module.exports = ExtractImagesFromTheWholeDocument;
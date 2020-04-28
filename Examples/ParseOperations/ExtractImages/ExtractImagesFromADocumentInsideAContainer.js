"use strict";

// This example demonstrates how to extract images from container item.
class ExtractImagesFromADocumentInsideAContainer {
    static async Run() {
        let fileInfo = new parser_cloud.FileInfo();
        fileInfo.filePath = "pdf/PDF with attachements.pdf";
        fileInfo.password = "password";

        let options = new parser_cloud.ImagesOptions();
        options.fileInfo = fileInfo;
        options.startPageNumber = 2;
        options.countPagesToExtract = 1;

        let containerItemInfo = new parser_cloud.ContainerItemInfo();
        containerItemInfo.relativePath = "template-document.pdf";
        options.containerItemInfo = containerItemInfo;

        let request = new parser_cloud.ImagesRequest(options);
        let response = await parseApi.images(request);
        response.pages.forEach(page => {
            console.log("Images from " + page.pageIndex + " page.");
            page.images.forEach(image => {
                console.log("Image path " + image.path + ". Download url: " + image.downloadUrl);
            });
        });
    }
}
module.exports = ExtractImagesFromADocumentInsideAContainer;
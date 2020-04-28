"use strict";

// This example demonstrates how to obtain container items information.
class GetContainerItemsInformation {
	static async Run() {
		let fileInfo = new parser_cloud.FileInfo();
		fileInfo.filePath = "containers/archive/zip.zip";
		let options = new parser_cloud.ContainerOptions();
		options.fileInfo = fileInfo;
		let request = new parser_cloud.ContainerRequest(options);

		let response = await infoApi.container(request);
		response.containerItems.forEach(item => {
			console.log("Name: " + item.name + ". FilePath: " + item.filePath);
		});
	}
}
module.exports = GetContainerItemsInformation;

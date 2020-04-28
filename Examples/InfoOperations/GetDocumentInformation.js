"use strict";

// This example demonstrates how to get document information
class GetDocumentInformation {
	static async Run() {
		let fileInfo = new parser_cloud.FileInfo();
		fileInfo.filePath = "words-processing/docx/password-protected.docx";
		fileInfo.password = "password";
		let options = new parser_cloud.InfoOptions();
		options.fileInfo = fileInfo;
		let request = new parser_cloud.GetInfoRequest(options);		

		let response = await infoApi.getInfo(request);
		console.log("InfoResult.PageCount: " + response.pageCount);
	}
}
module.exports = GetDocumentInformation;
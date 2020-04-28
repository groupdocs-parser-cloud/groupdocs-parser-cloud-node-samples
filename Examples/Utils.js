"use strict";

class Utils {
	
	static async UploadTestFile(filePath)
	{
		let resourcesFolder = './Resources/';
		let existResponse = await storageApi.objectExists(new parser_cloud.ObjectExistsRequest(filePath, myStorage));
			
		if (existResponse.exists === false) {
			var file = fs.readFileSync(resourcesFolder + filePath);
			var uploadRequest = new parser_cloud.UploadFileRequest(filePath, file);
			await fileApi.uploadFile(uploadRequest);
			console.log("Uploaded: " + filePath);
		}			
	}

	static async UploadTestFiles()
	{
		await this.UploadTestFile("cells/two-worksheets.xlsx");
		await this.UploadTestFile("containers/archive/companies.zip");
		await this.UploadTestFile("containers/archive/zip.zip");
		await this.UploadTestFile("email/eml/embedded-image-and-attachment.eml");
		await this.UploadTestFile("pdf/companies.pdf");
		await this.UploadTestFile("pdf/PDF with attachments.pdf");
		await this.UploadTestFile("slides/three-slides.pptx");
		await this.UploadTestFile("templates/template_1.json");
		await this.UploadTestFile("words-processing/docx/companies.docx");
		await this.UploadTestFile("words-processing/docx/formatted-document.docx");
		await this.UploadTestFile("words-processing/docx/password-protected.docx");
	}	
}

module.exports = Utils;

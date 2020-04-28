"use strict";

class TemplateUtils {

	static CreateIfNotExist(filePath) {
		let request = new parser_cloud.ObjectExistsRequest(filePath, myStorage, null);
		if (storageApi.objectExists(request).exists) {
			return;
		}

		let options = new parser_cloud.CreateTemplateOptions();
		let template = TemplateUtils.GetTemplate();
		options.template = template;
		options.storageName = myStorage;
		options.templatePath = filePath;

		let createRequest = new parser_cloud.CreateTemplateRequest(options);
		templateApi.createTemplate(createRequest);
	}

	static GetTemplate() {
		let field1 = new parser_cloud.Field();
		field1.fieldName = "Address";
		let fieldPosition1 = new parser_cloud.FieldPosition();
		fieldPosition1.fieldPositionType = "Regex";
		fieldPosition1.regex = "Company address:";
		field1.fieldPosition = fieldPosition1;

		let field2 = new parser_cloud.Field();
		field2.fieldName = "CompanyAddress";
		let fieldPosition2 = new parser_cloud.FieldPosition();
		fieldPosition2.fieldPositionType = "Linked";
		fieldPosition2.linkedFieldName = "ADDRESS";
		fieldPosition2.isRightLinked = true;
		let size2 = new parser_cloud.Size();
		size2.width = 100;
		size2.height = 10;
		fieldPosition2.searchArea = size2;
		fieldPosition2.autoScale = true;
		field2.fieldPosition = fieldPosition2;

		let field3 = new parser_cloud.Field();
		field3.fieldName = "Company";
		let fieldPosition3 = new parser_cloud.FieldPosition();
		fieldPosition3.fieldPositionType = "Regex";
		fieldPosition3.regex = "Company name:";
		field3.fieldPosition = fieldPosition3;

		let field4 = new parser_cloud.Field();
		field4.fieldName = "CompanyName";
		let fieldPosition4 = new parser_cloud.FieldPosition();
		fieldPosition4.fieldPositionType = "Linked";
		fieldPosition4.linkedFieldName = "Company";
		fieldPosition4.isRightLinked = true;
		let size4 = new parser_cloud.Size();
		size4.width = 100;
		size4.height = 10;
		fieldPosition4.searchArea = size4;
		fieldPosition4.autoScale = true;
		field4.fieldPosition = fieldPosition4;

		let table = new parser_cloud.Table();
		table.tableName = "Companies";
		let detectorparams = new parser_cloud.DetectorParameters();
		let rect = new parser_cloud.Rectangle();
		let size = new parser_cloud.Size();
		size.height = 60;
		size.width = 480;
		let position = new parser_cloud.Point();
		position.x = 77;
		position.y = 279;
		rect.size = size;
		rect.position = position;
		detectorparams.rectangle = rect;
		table.detectorParameters = detectorparams;

		let fields = [field1, field2, field3, field4];
		let tables = [table];
		let template = new parser_cloud.Template();
		template.fields = fields;
		template.tables = tables;

		return template;
	}
}

module.exports = TemplateUtils;
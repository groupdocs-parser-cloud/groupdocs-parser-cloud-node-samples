"use strict";

// This example demonstrates how to get template file from storage.
class GetTemplate {
    static async Run() {
        require('../TemplateUtils').CreateIfNotExist("templates/template-for-companies.json");
        let options = new parser_cloud.TemplateOptions();
        options.templatePath = "templates/template-for-companies.json";

        let request = new parser_cloud.GetTemplateRequest(options);
        let template = await templateApi.getTemplate(request);

        template.fields.forEach(field => {
            console.log("Field: " + field.fieldName);
        });
        template.tables.forEach(table => {
            console.log("Table: " + table.tableName);
        });
    }
}
module.exports = GetTemplate;

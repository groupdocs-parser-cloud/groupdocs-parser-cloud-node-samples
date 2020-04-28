"use strict";

// This example demonstrates how to save template file in storage.
class CreateOrUpdateTemplate {
    static async Run() {

        let options = new parser_cloud.CreateTemplateOptions();
        options.templatePath = "templates/template-for-companies.json";
        options.template = require('../TemplateUtils').GetTemplate();

        let request = new parser_cloud.CreateTemplateRequest(options);
        let response = await templateApi.createTemplate(request);
        console.log("Path to saved template in storage: " + response.templatePath + ". Link to download template: " + response.url);
    }
}
module.exports = CreateOrUpdateTemplate;
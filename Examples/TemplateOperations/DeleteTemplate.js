"use strict";

// This example demonstrates how to delete template file from storage.
class DeleteTemplate {
    static async Run() {
        require('../TemplateUtils').CreateIfNotExist("templates/template-for-companies.json");
        let options = new parser_cloud.TemplateOptions();
        options.templatePath = "templates/template-for-companies.json";

        let request = new parser_cloud.DeleteTemplateRequest(options);
        await templateApi.deleteTemplate(request);
        console.log("Done.");
    }
}
module.exports = DeleteTemplate;
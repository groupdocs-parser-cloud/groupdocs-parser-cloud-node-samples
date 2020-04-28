"use strict";

global.parser_cloud = require("groupdocs-parser-cloud");
global.fs = require("fs");
global.serializer_1 = require("groupdocs-parser-cloud/lib/serializer");

//// ***********************************************************
////          GroupDocs.Parser Cloud API Examples
//// ***********************************************************

//TODO: Get your AppSID and AppKey at https://dashboard.groupdocs.cloud (free registration is required).

global.appSid = "XXXXXXXXXXXXXXXX";
global.appKey = "XXXXXXXXXXXXXXXX";

global.myStorage = "First Storage";

const config = new parser_cloud.Configuration(appSid, appKey);
config.apiBaseUrl = "https://api.groupdocs.cloud";

// construct ParseApi
global.parseApi = parser_cloud.ParseApi.fromConfig(config);

// construct TemplateApi
global.templateApi = parser_cloud.TemplateApi.fromConfig(config);

// construct InfoApi
global.infoApi = parser_cloud.InfoApi.fromConfig(config);

// construct FileApi
global.fileApi = parser_cloud.FileApi.fromConfig(config);

// construct StorageApi
global.storageApi = parser_cloud.StorageApi.fromConfig(config);

async function examples() {

    // Uploading sample test files to storage
    await require('./Utils').UploadTestFiles();

    // Info Operations

    await require('./InfoOperations/GetSupportedFileTypes').Run();    
    await require('./InfoOperations/GetDocumentInformation').Run();    
    await require('./InfoOperations/GetContainerItemsInformation').Run(); 
    
    // Parse Operations

    await require('./ParseOperations/ExtractImages/ExtractImagesByAPageNumberRange').Run();    
    await require('./ParseOperations/ExtractImages/ExtractImagesFromADocumentInsideAContainer').Run();    
    await require('./ParseOperations/ExtractImages/ExtractImagesFromTheWholeDocument').Run();    

    await require('./ParseOperations/ExtractText/ExtractFormattedText').Run();    
    await require('./ParseOperations/ExtractText/ExtractTextByAPageNumberRange').Run();    
    await require('./ParseOperations/ExtractText/ExtractTextFromADocumentInsideAContainer').Run();    
    await require('./ParseOperations/ExtractText/ExtractTextFromTheWholeDocument').Run();    

    await require('./ParseOperations/ParseByTemplate/ParseByTemplateDefinedAsAnObject').Run();    
    await require('./ParseOperations/ParseByTemplate/ParseByTemplateOfADocumentInsideAContainer').Run();    
    await require('./ParseOperations/ParseByTemplate/ParseByTemplateStoredInUserStorage').Run();    

    // Template operations

    await require('./TemplateOperations/CreateOrUpdateTemplate').Run();    
    await require('./TemplateOperations/DeleteTemplate').Run();    
    await require('./TemplateOperations/GetTemplate').Run();    
}

examples();

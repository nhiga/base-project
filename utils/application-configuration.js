import fs from "fs";
import Handlebars from "handlebars";
import path from "path";

import { BUILD_FOLDER, PUBLIC_FOLDER } from "./server.config";

const ApplicationConfiguration = {
  templateFile: null,
  compiledTemplate: null,
  getFile: (fileName = null) => {
    try {
      if (!ApplicationConfiguration.templateFile && fileName) {
        ApplicationConfiguration.templateFile = fs.readFileSync(fileName, { encoding: "utf-8" });
      }
    } catch (err) {
      /* eslint-disable-next-line no-console */
      console.log(`[application-configuration] Error occurred in getFile:`, err);
    }

    return ApplicationConfiguration.templateFile;
  },
  compileTemplate: (templateName = null) => {
    try {
      if (!ApplicationConfiguration.compiledTemplate && templateName) {
        ApplicationConfiguration.compiledTemplate = Handlebars.compile(templateName);
      }
    } catch (err) {
      /* eslint-disable-next-line no-console */
      console.log(`[application-configuration] Error occurred in compileTemplate:`, err);
    }

    return ApplicationConfiguration.compiledTemplate;
  },
  applyTemplate: ({ content }) => {
    let renderedPage = null;

    try {
      if (!ApplicationConfiguration.compiledTemplate) {
        const templateName = ApplicationConfiguration.getFile(`${path.join(BUILD_FOLDER, PUBLIC_FOLDER)}/index.html`);
        ApplicationConfiguration.compileTemplate(templateName);
      }

      renderedPage = ApplicationConfiguration.compiledTemplate({ content });
    } catch (err) {
      /* eslint-disable-next-line no-console */
      console.log(`[application-configuration] Error occurred in applyTemplate:`, err);
    }

    return renderedPage;
  }
};

export default ApplicationConfiguration;
